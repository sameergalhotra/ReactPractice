import React from "react";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map((p, index) => {
    return (
      <Person
        Name={p.Name}
        Age={p.Age}
        Key={p.Id}
        Click={() => props.clicked(index)}
        changed={event => props.changed(event, p.Id)}
      />
    );
  });
export default persons;
