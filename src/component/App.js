import React from "react";
import { Route } from "react-router-dom";
import Lessons from './Lessons';
import About from './About';
import Practice from './Practice';
import DrillList from './DrillList';
import Drill from './Drill';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Lessons} />
        <Route path="/about" component={About} />
        <Route exact path="/practice" component={Practice} />
        <Route exact path="/practice/drills" component={DrillList} />
        <Route path="/practice/drill/:drillName" component={Drill} />
      </div>
    );
  };
}
