import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  render() {
    return (
      <div>
        <article className="box">
          <div>
            <p className="title">Lesson 1</p>
            <p className="subtitle">Fingers and Keys</p>
            <aside className="menu">
              <ul className="menu-list">
                <li>
                  <Link to="/lesson-1/keyboard">The Keyboard</Link>
                  <ul>
                    <li><Link to="/lesson-1/vowels">Rules For Short Vowel Sounds</Link></li>
                    <li><Link to="/lesson-1/vowels">What About Long Vowels and Diphthongs?</Link></li>
                  </ul>
                </li>
                <li><Link to="/lesson-1/stroking-words">Stroking Your First Words</Link></li>
              </ul>
            </aside>
          </div>
        </article>
      </div>
    );
  }
}
