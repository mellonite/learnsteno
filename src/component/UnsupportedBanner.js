import React from "react";

export default class UnsupportedBanner extends React.Component {
  canPlayOgg() {
    let obj = document.createElement('video');
    return obj.canPlayType('video/ogg; codecs="theora"' !== '');
  }

  render() {
    console.log(this.canPlayOgg());
    if (!this.canPlayOgg()) {
      return (
        <section className="hero is-warning is-small">
          <div className="notification is-danger">
            <div className="container narrow">
              <h1 className="title">
                <font-awesome-icon icon="exclamation-triangle"></font-awesome-icon>
                Unsupported Browser
              </h1>
              <h2 className="subtitle">
                  You are using an unsupported browser. You can still use learnsteno, but certain features may not work.
              </h2>
            </div>
          </div>
        </section>
      )
    }
  }
}
