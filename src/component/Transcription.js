import React from "react";
import { Progress } from 'react-sweet-progress';
import Navbar from "./Navbar";
import "react-sweet-progress/lib/style.css";

export default class Drill extends React.Component {
  constructor(props) {
    super(props);
    this.transcription = require('../assets/practicedata/transcription/' + this.props.match.params.transcriptionName + '.json');
    this.state = {
      sentences: this.transcription.words,
      currentSentence: this.drill.words[0],
      progress: 0,
      sentenceIndex: 0,
      input: '',
      showText: false,
      showLayout: false,
      soundEffects: true
    }
    //this.startTime = null;
    //this.endTime = null;
    this.correctSound = new Audio(require('../assets/audio/correct.ogg'));
    this.formUpdate = this.formUpdate.bind(this);
  }

  playSentence() {
    //this.startTime = new Date();
    this.state.sentences[this.state.sentenceIndex][0].play()
  }

  componentDidMount() {
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
            { this.sentenceIndex < this.transcription.sentences.length &&
              <div>
                <button class="button is-outlined is-primary is-fullwidth"
                  onClick={this.playSentence}>
                  { startTime == null ? 'Start' : 'Repeat Audio' }
                  <font-awesome-icon style="margin-left: .3rem" class="fa-icon" onClick={startTime == null ? 'play' : 'redo'}></font-awesome-icon>
                </button>
                <article className={`message ${this.state.showText ? "" : "is-hidden"}`}>
                  <div class="message-body">
                    { currentSentence[1].toLowerCase() }
                  </div>
                </article>
                <textarea className="textarea is-primary is-small has-fixed-size" type="text" value={this.state.input} onChange={this.formUpdate}/>
                {/* <-- Options card -->
                <div class="card" style="width:35rem;margin-top:2rem">
                    <div class="card-content">
                        <div class="content">
                            <b-checkbox v-model="showLayout">Show Plover Layout</b-checkbox>
                            <b-checkbox v-model="showText">Show Text</b-checkbox>
                            <b-checkbox v-model="soundEffects">Sound Effects</b-checkbox>
                        </div>
                    </div>
                    <div v-if="showLayout" class="card-image" style="padding:1rem">
                        <img class="image" src="../assets/img/Fig1.svg">
                    </div>
                </div> */}
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

class TranscriptResults extends React.Component {
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
