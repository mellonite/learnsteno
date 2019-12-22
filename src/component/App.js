import React from "react";
import { Route, Switch } from "react-router-dom";
import LessonList from './LessonList';
import About from './About';
import Practice from './Practice';
import DrillList from './DrillList';
import Drill from './Drill';
import Lesson from './Lesson';
import Transcription from './Transcription';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LessonList} />
          <Route path="/about" component={About} />
          <Route exact path="/practice" component={Practice} />
          <Route exact path="/practice/drills" component={DrillList} />
          <Route path="/practice/drill/:drillName" component={Drill} />
          <Route path="/lesson-:lessonIndex" component={Lesson} />
          <Route path="/practice/transcription/:transcriptionName" component={Transcription} />
        </Switch>
      </div>
    );
  };
}
