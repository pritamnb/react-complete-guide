// Diving Deeper into Components & React Internals - 7
// @ts-nocheck
import React, { Component } from "react";
import classes from "./App.css";

import Radium from "radium";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: 1, name: "Pritam", age: 24 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Sushi", age: 33 },
    ],
    otherState: "Some other state",
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDervideStateFromProps", props);
    return state;
  }
  componentDidMount() {
    console.log("[App.js] componentDidMount ");
  }

  nameChangedHandler = (event, id) => {
    // console.log('*******************', event.target.value, id);

    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    // or
    // const person = Object.assign({},this.state.persons[personIndex]);
    person.name = event.target.value;
    const changedPerson = [...this.state.persons];
    // console.log('############', person);

    changedPerson[personIndex] = person;
    // console.log('*******************', changedPerson);
    this.setState({
      persons: changedPerson,
    });
    console.log(this.state);
  };
  deletePersonHandle = (peronIndex) => {
    const persons = this.state.persons;
    persons.splice(peronIndex, 1);
    this.setState({ persons: persons });
  };
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandle}
          changed={this.nameChangedHandler}
        ></Persons>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, "Hi, I'm a React App!!!")
    // );
  }
}

export default Radium(App);