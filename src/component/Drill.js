import React from "react";
import { Progress } from 'react-sweet-progress';
import Navbar from "./Navbar";
import "react-sweet-progress/lib/style.css";

export default class Drill extends React.Component {
  constructor(props) {
    super(props);
    this.drill = require('../assets/practicedata/drills/' + this.props.match.params.drillName + '.json');
    this.state = {
      words: this.drill.words,
      currentWord: this.drill.words[0],
      progress: 0,
      wordIndex: 0,
      input: '',
      drillErrors: 0,
      wordErrors: -1,
      repeat: false,
      random: false,
      showLayout: false,
      soundEffects: true
    }
    this.startTime = null;
    this.endTime = null;
    this.correctSound = new Audio(require('../assets/audio/correct.ogg'));
    this.formUpdate = this.formUpdate.bind(this);
  }

  updateWords() {
    if(!this.random) {
      return this.state.words;
    } else {
      let words = this.props.drill.words.slice(0); // cheap way to copy the array
      for (let i = words.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [words[i], words[j]] = [words[j], words[i]];
      }
      return words;
    }
  }

  componentDidMount() {
    this.startTime = new Date();
    this.correctSound.volume = .8;
    /*
    this.$pouch.get('drill' + this.drillName).then((doc) => {
        this.dbDrillData = doc;
    }).catch((err) => {
        if (err.name !== 'not_found') console.log(err)
    })
    */
  }

  formUpdate(event) {
    this.setState({
      input: event.target.value
    });
  }

  componentDidUpdate() {
    if (this.state.input.trim() === this.state.currentWord[0])  {
      if (this.state.wordIndex + 1 === this.state.words.length) {
        this.endTime = new Date();
        this.setState(function(state,props) {
          return {
            wordIndex: state.wordIndex + 1,
            progress: ((state.wordIndex + 1) / state.words.length) * 100,
            input: '',
            drillErrors: state.drillErrors + Math.max(state.wordErrors,0),
            wordErrors: -1 // errors are counted per word, reset wordErrors
          }
        });
      } else {
        this.setState(function(state, props) {
          return {
            currentWord: state.words[state.wordIndex + 1],
            wordIndex: state.wordIndex + 1,
            progress: ((state.wordIndex + 1) / state.words.length) * 100,
            input: '',
            drillErrors: state.drillErrors + Math.max(state.wordErrors,0),
            wordErrors: -1 // errors are counted per word, reset wordErrors
          }
        });
      }

      if (this.state.soundEffects) {
        this.correctSound.play();
      }
    } else if (this.input === '') {
      this.setState(function(state, props){
        return {
          wordErrors: state.wordErrors + 1
        };
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar page="practice" />
        <div className="ui text container page">
            <h1 className="is-size-2">{ this.drill.name }</h1>
            <h2 className="is-size-5">{ this.drill.description }</h2>
            <Progress className="progress is-primary" percent={this.state.progress} status="success" />
            {/* only render the drill if there are still words left */}
            { this.state.wordIndex < this.drill.words.length &&
              <div>
                <div className="has-text-centered">
                    <h2 className="is-size-3 dotunder">{ this.state.currentWord[0] }</h2>
                    {/*
                    <tooltip type="is-black" position="is-right" label={`${this.state.currentWord[1]}`}>
                        <h2 className="is-size-3 dotunder">{ this.state.currentWord[0] }</h2>
                    </tooltip>
                    */}
                </div>
                <input className="input is-primary" type="text" value={this.state.input} onChange={this.formUpdate}/>
              </div>
            }
            {/* render results when finished */}
            { this.state.wordIndex >= this.drill.words.length && <DrillResults
                                                                    startTime={this.startTime}
                                                                    endTime={this.endTime}
                                                                    drillErrors={this.state.drillErrors}
                                                                    words={this.state.words}/> }
        </div>
      </div>
    )
  }
}

class DrillResults extends React.Component {
  formatDuration(timeInMS) {
    console.log(timeInMS);
    let minutes = Math.floor(timeInMS / 1000 / 60);
    let seconds = Math.round(timeInMS / 1000 % 60);
    if (seconds < 10) seconds += '0';
    return minutes + ':' + seconds;
  }

  wordsPerMinute() {
    return Math.round(this.props.words.length / ((this.props.endTime - this.props.startTime) / 1000 / 60));
  }

  render() {
    return(
      <div>
        <h4 className="is-size-4 has-text-centered">Results</h4>
        <div className="level">
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">Words per minute</p>
                    <p className="title">{ this.wordsPerMinute() }</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">Missed strokes</p>
                    <p className="title">{ this.props.drillErrors }</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">Total time</p>
                    {/* format minutes and seconds */}
                    <p className="title">{ this.formatDuration(this.props.endTime - this.props.startTime) }</p>
                </div>
            </div>
        </div>
        {/*
          <h4 style="margin-bottom: .5rem" className="is-size-4 has-text-centered">Overall Best</h4>
          <div className="level">
              <div className="level-item has-text-centered">
                  <div>
                      <p className="heading">Words per minute</p>
                      <p className="title">{ Math.max(this.wordsPerMinute(), this.dbDrillData.wordsPerMinute) }</p>
                  </div>
              </div>
              <div className="level-item has-text-centered">
                  <div>
                      <p className="heading">Missed strokes</p>
                      <p className="title">{ Math.min(this.drillErrors, this.dbDrillData.drillErrors) }</p>
                  </div>
              </div>
              <div className="level-item has-text-centered">
                  <div>
                      <p className="heading">Total time</p>
                      {/* format minutes and seconds
                      <p className="title">{ this.formatDuration(Math.min(this.endTime - this.startTime, this.dbDrillData.time)) }</p>
                  </div>
              </div>
          </div>
          */}
      </div>
    )
  }
}
