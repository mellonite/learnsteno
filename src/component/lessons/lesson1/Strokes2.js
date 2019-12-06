import React from "react";
import { Link } from "react-router-dom";

export default class Strokes2 extends React.Component {
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
      clear: event.target.value.trim() === "hop"
    });
  }

  render() {
    return (
      <div>
        <div className="box content">
        <h2>Stroking Your First Words</h2>
          <p>
            You've just tapped your first word in steno!
          </p>

          <p>
            Notice that it doesn't really matter that all the keys go down absolutely simultaneously. The only thing Plover cares about is that there's one moment in time when all three keys are down together. If one goes down a little before the others, or comes up later than the others, Plover still does the right thing.
          </p>

          <p>
            Try another word:
          </p>

          <ul>
            <li> Rest your left forefinger on the <span className="stroke">H</span> key on the left half of the keyboard </li>
            <li> Rest your left thumb on the <span className="stroke">O</span> key </li>
            <li> Rest your right middle finger on the <span className="stroke">P</span> key on the right half of the keyboard </li>
          </ul>

          <p>
            <img className="image" src="../../assets/img/Fig4.svg" />
            When your fingers are in position, press them all down together, and release them.
          </p>
          <input className="input is-primary" type="text" value={this.state.input} onChange={this.handleChange} />
        </div>
        <Link to="/lesson-1/stroking-words-1" className="button is-primary is-pulled-left">Previous</Link>
        <Link to="/lesson-1/stroking-words-3" className="button is-primary is-pulled-right" disabled={!this.state.clear}>Next</Link>
      </div>
    )
  }
}
