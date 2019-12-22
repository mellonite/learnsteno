import React from "react";
import { Progress } from 'react-sweet-progress';
import Navbar from "./Navbar";
import "react-sweet-progress/lib/style.css";

export default class Drill extends React.Component {
  constructor(props) {
    super(props);
    this.transcription = require('../assets/practicedata/transcription/' + this.props.match.params.transcriptionName + '.json');
    this.transcriptionAudio = this.transcription.sentences.map((s) => { return [new Audio(require('../assets/audio/transcription/' + s[0] + '.ogg')), s[1]]});
    this.state = {
      sentences: this.transcriptionAudio,
      sentenceIndex: 0,
      currentSentence: this.transcriptionAudio[0],
      progress: 0,
      input: '',
      showText: false,
      showLayout: false,
      soundEffects: true,
      soundPlayed: false
    }
    //this.startTime = null;
    //this.endTime = null;
    this.correctSound = new Audio(require('../assets/audio/correct.ogg'));
    this.handleInputChange = this.handleInputChange.bind(this);
    this.isInputCorrect = this.isInputCorrect.bind(this);
    this.playSentence = this.playSentence.bind(this);
  }

  playSentence() {
    //this.startTime = new Date();
    this.state.sentences[this.state.sentenceIndex][0].play();
    this.setState({
      soundPlayed: true
    });
  }

  isInputCorrect() {
    // a little premature optimization, return false if we don't have the same number of words
    if (this.state.currentSentence[1].trim().split(' ').length !== this.state.input.trim().split(' ').length) {
      return false;
    }

    let correct = this.state.currentSentence[1].toUpperCase().replace(/[^\w\s]/g, "");
    let attempt = this.state.input.trim().toUpperCase().replace(/[^\w\s]/g, "");
    return attempt === correct;
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidUpdate() {
    if(this.isInputCorrect()) {
      this.setState(function(state,props) {
        return {
          sentenceIndex: state.sentenceIndex + 1,
          input: '',
          progress: ((state.sentenceIndex+1) / state.sentences.length)  * 100,
          currentSentence: state.sentences[state.sentenceIndex+1]
        }
      });
      this.correctSound.play();
    }
  }

  render() {
    return (
      <div>
        <Navbar page="practice" />
        <div className="ui text container page">
            <h1 className="is-size-2"> Transcription Practice </h1>
            <Progress className="progress is-primary" percent={this.state.progress} status="success" />
            {/* only render the drill if there are still words left */}
            { this.state.sentenceIndex < this.state.sentences.length &&
              <div>
                <button className="button is-outlined is-primary is-fullwidth"
                  onClick={this.playSentence}>
                  { this.state.startTime == null ? 'Start' : 'Repeat Audio' }
                </button>
                <article className={`message ${this.state.showText ? "" : "is-hidden"}`}>
                  <div className="message-body">
                    { this.state.currentSentence[1].toLowerCase() }
                  </div>
                </article>
                <textarea className="textarea is-primary is-small has-fixed-size"
                          name="input"
                          type="text"
                          value={this.state.input}
                          onChange={this.handleInputChange}/>
                {/* Options card */}
                <div class="card">
                    <div class="card-content">
                        <div class="content">
                          <label class="checkbox">
                            <input type="checkbox"
                                   name="showLayout"
                                   checked={this.state.showLayout}
                                   onChange={this.handleInputChange}/>
                            Show Plover Layout
                          </label>
                          <label class="checkbox">
                            <input type="checkbox"
                                   name="showText"
                                   checked={this.state.showText}
                                   onChange={this.handleInputChange}/>
                            Show Text
                          </label>
                          <label class="checkbox">
                            <input type="checkbox"
                                   name="soundEffects"
                                   checked={this.soundEffects}
                                   onChange={this.handleInputChange}/>
                            Sound Effects
                          </label>
                        </div>
                    </div>
                    { this.state.showLayout &&
                      <div class="card-image">
                          <img class="image" src="../assets/img/Fig1.svg"/>
                      </div>
                    }
                </div>
              </div>
            }
            {/* render results when finished */}
            { this.state.wordIndex >= this.state.sentences.length && <TranscriptResults
                                                                    startTime={this.startTime}
                                                                    endTime={this.endTime}
                                                                    sentences={this.state.sentences}/> }
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
    return Math.round(this.props.sentences.length / ((this.props.endTime - this.props.startTime) / 1000 / 60));
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
