import React from "react";

export default class ConstructionBanner extends React.Component {
  render() {
    return (
      <section className="hero is-warning is-small">
        <div className="notification is-warning">
          <div className="container narrow">
            <h1 className="title">
              Under Construction
            </h1>
            <h2 className="subtitle">
              Learn Steno is in a very early stage. There will be a lot of missing content. If you'd like to contribute or just leave feedback, check out our github in the contribute tab.
            </h2>
          </div>
        </div>
      </section>
    )
  }
}
