import React from "react";
import Navbar from "./Navbar";
import LessonCard from "./LessonCard";
import ConstructionBanner from "./ConstructionBanner";
import Scorecard from "./Scorecard";

export default class Lessons extends React.Component {
  render() {
    return(
      <div>
        <Navbar page="lessons"/>
        <ConstructionBanner />
        <div className="container page">
          <div className="columns">
            <div className="column is-one-third">
              <LessonCard index="1" title="Fingers and Keys" description="Learn the keys on the steno keyboard and where your fingers are placed." />
              <LessonCard index="3" title="English Sounds" />
              <LessonCard index="5" title="Prefix and Suffix Strokes" />
            </div>
            <div className="column is-one-third">
              <LessonCard index="2" title="Steno Order" />
              <LessonCard index="4" title="Common Briefs" />
              <LessonCard index="6" title="Prefix/Suffix Alternatives" />
            </div>
            <div className="column is-one-third">
              <Scorecard />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
