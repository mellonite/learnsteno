import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Keyboard from "./Keyboard";
import Vowels from "./Vowels";
import Strokes1 from "./Strokes1";
import Strokes2 from "./Strokes2";
import Strokes3 from "./Strokes3";


export default class Lesson1 extends React.Component {
  render() {
    return (
      <div className="container lesson">
        <div className="columns">
          <div className="column is-one-third">
            <Menu />
          </div>
          <div className="column">
            {/* Switch is needed to prevent redirect from redirecting ALL links to keyboard */}
            <Switch>
              <Route path="/lesson-1/keyboard" component={Keyboard} />
              <Route path="/lesson-1/vowels" component={Vowels} />
              <Route path="/lesson-1/stroking-words-1" component={Strokes1} />
              <Route path="/lesson-1/stroking-words-2" component={Strokes2} />
              <Route path="/lesson-1/stroking-words-3" component={Strokes3} />
              <Redirect from="/lesson-1/" to="/lesson-1/keyboard" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
