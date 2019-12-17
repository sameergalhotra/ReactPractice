import React from "react";

import "./Person.css";

const Person = props => {
  return (
    <div>
      <p onClick={props.Click}>
        I am {props.Name} and my Age is {props.Age}
      </p>
      <input type="text" onChange={props.Changed} />
    </div>
  );
};
export default Person;
