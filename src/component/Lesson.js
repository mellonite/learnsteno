import React from "react";
import Navbar from "./Navbar";
import Lesson1 from "./lessons/lesson1/Lesson1";

export default class Lesson extends React.Component {
  render() {
    const index = this.props.match.params.lessonIndex;
    return (
      <div>
        <Navbar page="lessons" />
        {/* Use a switch for determining which lesson to load */}
        {{
          1: (
            <Lesson1 />
          )
        }[index]}
      </div>
    );
  }
}
