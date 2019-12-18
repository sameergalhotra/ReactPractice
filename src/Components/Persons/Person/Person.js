import React, { Component } from "react";

import classes from "./Person.module.css";
import AuthContext from "../../../Context/Auth-context";

class Person extends Component {
  static contextType = AuthContext;

  render() {
    return (
      <div className={classes.Person}>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please login in</p>
        )}
        <p onClick={this.props.Click}>
          I am {this.props.Name} and my Age is {this.props.Age}
        </p>
        <input type="text" onChange={this.props.changed} />
      </div>
    );
  }
}

export default Person;
