import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    // className={`${page === 'lessons' ? "is-active" : ""}`} for conditional class name
    // https://www.pluralsight.com/guides/applying-classes-conditionally-react
    // todo: nav to transcription
    return (
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="container narrow">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item is-size-5 has-text-weight-semibold">Learn Steno</Link>
            <Link to="/" className={`navbar-item  ${this.props.page === "lessons" ? "is-active" : ""}`}>Lessons</Link>
            <Link to="/practice" className={`navbar-item  ${this.props.page === "practice" ? "is-active" : ""}`}>Practice</Link>
            <Link to="/about" className={`navbar-item  ${this.props.page === "about" ? "is-active" : ""}`}>About</Link>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mellonite/learnsteno" className="navbar-item">
              Contribute</a>
          </div>
        </div>
      </nav>
    );
  }
}
