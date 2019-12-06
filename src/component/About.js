import React from "react";
import Navbar from "./Navbar";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Navbar page="about" />
        <div className="container page content box">
            <h1 className="is-size-2">About Learn Steno</h1>
            <p>
              Learn Steno was developed by Mel Griffin. It is open source and available on <a href="https://github.com/mellonite/learnsteno">github</a>.
            </p>
            <p>
              The lessons and drills were written by Zack Brown, and can be found at <a href="https://sites.google.com/site/ploverdoc/home">Learn Plover!</a>
            </p>
            <p>
              Audio for transcription practice was sourced from LibriSpeech and is available here <a href="https://www.openslr.org/12">here</a>.
            </p>
        </div>
      </div>
    );
  }
}
