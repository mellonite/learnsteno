import React from "react";
import { Link } from "react-router-dom";

export default class Strokes1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      clear: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
      clear: event.target.value.trim() === 'tap'
    });
  }

  render() {
    return (
      <div>
        <div className="box content">
          <h2>Stroking Your First Words</h2>
          <p>
            Now you're ready to start typing words. Have your NKRO keyboard in front of you, and activate the Plover software. Once you're set up, do the following steps:
          </p>
          <ul>
            <li> Rest your left third finger on the <span className="stroke">T</span> key on the left half of the keyboard </li>
            <li> Rest your left thumb on the <span className="stroke">A</span> key </li>
            <li> Rest your right middle finger on the <span className="stroke">P</span> key on the right half of the keyboard </li>
          </ul>

          <p>
            <img className="image" src="../../assets/img/Fig3.svg" />
            When your fingers are in position, press them all down together, and release them.
          </p>
          <input className="input is-primary" type="text" value={this.state.input} onChange={this.handleChange} />
        </div>
        <Link to="/lesson-1/vowels" className="button is-primary is-pulled-left">Previous</Link>
        <Link to="/lesson-1/stroking-words-2" className="button is-primary is-pulled-right" disabled={!this.state.clear}>Next</Link>
      </div>
    )
  }
}
