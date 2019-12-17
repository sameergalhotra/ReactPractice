import React from "react";

import classes from "./Person.module.css";

const Person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.Click}>
        I am {props.Name} and my Age is {props.Age}
      </p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};
export default Person;
