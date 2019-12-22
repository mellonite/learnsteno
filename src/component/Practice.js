import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Scorecard from "./Scorecard";

export default class Practice extends React.Component {
  constructor(props) {
    super(props);

    this.transcriptions = [
      "251-118436",
      "6313-76958",
      "6313-66129",
      "5895-34622"
    ]

    this.navToTranscription = this.navToTranscription.bind(this);
  }

  navToTranscription(){
    let randTrans = this.transcriptions[Math.floor(Math.random()*this.transcriptions.length)]
    return "/practice/transcription/" + randTrans;
  }
  render() {
    return (
      <div>
        <Navbar page='practice' />
        <div className="container page">
          <div className="columns">
            <div className="column">
              <article className="box">
                <p className="title">Lesson Drills</p>
                <p className="subtitle">Single Words</p>
                <div className="content">
                  <p>
                    Drill individual words paired with each lesson
                  </p>
                  <div className="level-item is-centered">
                    <Link to="/practice/drills" className="button is-primary">Start</Link>
                  </div>
                </div>
              </article>
            </div>
            <div className="column">
              <article className="box">
                <p className="title">Transcription</p>
                <p className="subtitle">Sentences</p>
                <div className="content">
                  <p>
                      Practice your skills by transcribing sentences as they are read out loud.
                      Note that this section is aimed at more advanced learners.
                  </p>
                  <div className="level-item is-centered">
                    <Link to={this.navToTranscription()}className="button is-primary">Start</Link>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <Scorecard />
            </div>
          </div>
        </div>
    </div>
    );
  }
}
