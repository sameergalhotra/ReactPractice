import React, { Component } from "react";

import Person from "./Person/Person";
import "./Person.css";

class App extends Component {
  state = {
    arrPersons: [
      { Id: "1", Name: "Person 1", Age: 30 },
      { Id: "2", Name: "Person 2", Age: 31 },
      { Id: "3", Name: "Person 3", Age: 32 }
    ]
  };

  TextChagnedeventHandler = event => {
    this.setState({ username: event.target.value });
  };
  deletePersonHandler = pindex => {
    const persons = this.state.arrPersons.slice();
    persons.splice(pindex, 1);
    this.setState({ arrPersons: persons });
  };
  nameChagnedHandler = (event, id) => {
    const personindex = this.state.arrPersons.findIndex(p => {
      return p.Id === id;
    });
    const person = this.state.arrPersons[personindex];
    person.Name = event.target.value;

    const persons = this.state.arrPersons.slice();
    persons[personindex] = person;
    this.setState({ arrPersons: persons });
  };

  render() {
    return (
      <div className="App">
        <h1>Person example</h1>
        {this.state.arrPersons.map((p, index) => {
          return (
            <Person
              Click={() => this.deletePersonHandler(index)}
              Name={p.Name}
              Age={p.Age}
              Key={p.Id}
              Changed={event => this.nameChagnedHandler(event, p.Id)}
            />
          );
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
