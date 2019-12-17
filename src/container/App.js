import React, { Component } from "react";

import classes from "./App.css";

import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
  state = {
    Persons: [
      { Id: 1, Name: "Person 1", Age: 30 },
      { Id: 2, Name: "Person 2", Age: 31 },
      { Id: 3, Name: "Person 3", Age: 32 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  TextChagnedeventHandler = event => {
    this.setState({ username: event.target.value });
  };

  deletePersonHandler = pindex => {
    const persons = this.state.Persons.slice();
    persons.splice(pindex, 1);
    this.setState({ Persons: persons });
  };

  nameChagnedHandler = (event, id) => {
    const personindex = this.state.Persons.findIndex(p => {
      return p.Id === id;
    });

    const person = this.state.Persons[personindex];
    person.Name = event.target.value;

    const persons = this.state.Persons.slice();
    persons[personindex] = person;
    this.setState({ Persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.Persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChagnedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.Persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
