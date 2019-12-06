import React from "react";
import { Link } from "react-router-dom";

export default class Strokes3 extends React.Component {
  render() {
    return (
      <div>
        <div className="box content">
          <p>
            Now hop for joy - you just tapped your second word in steno!
          </p>

          <p>
            One important detail to take note of is the fact that it matters which side of the keyboard contains the consonant sound you want. In the case of 'tap' and 'hop', you used the <span className="stroke">P</span> from the right side of the keyboard rather than the left. This is because the <span className="stroke">P</span> was needed at the tail end of the syllable rather than at the start of it. A more rigorous explanation of this can be found in Lesson 2: Steno Order. For now, just remember that the start of a syllable is keyed on the left side of the keyboard, and the end of a syllable is keyed on the right. The vowels are keyed toward the middle of the keyboard, just as they usually occur in the middle of a syllable.
          </p>
        </div>
        <Link to="/lesson-1/stroking-words-2" className="button is-primary is-pulled-left">Previous</Link>
        <Link to="/practice/drill/1a" className="button is-primary is-pulled-right">Next</Link>
      </div>
    )
  }
}
