import React from "react";
import { Link } from "react-router-dom";

export default class LessonCard extends React.Component {
  render() {
    return (
      <article className="box">
        <p className="title">Lesson {this.props.index}</p>
        <p className="subtitle">{this.props.title}</p>
        <div className="content">
          <p>
            {this.props.description}
          </p>
          <div className="level-item is-centered">
            <Link to={`/lessons/${this.props.index}`} className="button is-primary">Start</Link>
          </div>
        </div>
      </article>
    )
  }
}
