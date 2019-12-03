import React from "react";
import Navbar from "./Navbar";
import Scorecard from "./Scorecard";
import { Link } from "react-router-dom";

export default class DrillList extends React.Component {
  constructor(props) {
    super(props);
    this.completedDrills = [];
    this.drills = require('../assets/drills.json');
  }

  render() {
    return (
      <div>
        <Navbar page="Practice" />
        <div className="container page">
          <div className="columns">
            <div className="column">
              <article className="box">
                {this.drills.map(function(drill,index) {
                  return (
                    <div>
                      <h2 className="is-size-4">{drill.name}</h2>
                      <aside className="menu">
                          <ul className="menu-list">
                            {drill.exercises.map(function(exercise,index) {
                              return (
                                <li>
                                  <Link to={`/practice/drill/${exercise.code}`}>
                                    {exercise.name}
                                    {/*
                                      <font-awesome-icon
                                      className={`${!this.completedDrills.includes(exercise.code) ? "is-hidden" : ""}`}
                                      style="color: green"
                                      icon="check"></font-awesome-icon>
                                    */}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                      </aside>
                    </div>
                  );
                })}
              </article>
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
