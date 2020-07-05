// @ts-nocheck
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Pritam', age: 24 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Sushi', age: 33 },
    ],
    otherState: 'Some other state',
    showPersons: true,
  };
  // console.log(personsState);

  nameChangedHandler = (event, id) => {
    console.log('*******************', event.target.value, id);

    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    // or
    // const person = Object.assign({},this.state.persons[personIndex]);
    person.name = event.target.value;
    const changedPerson = [...this.state.persons];
    console.log('############', person);

    changedPerson[personIndex] = person;
    console.log('*******************', changedPerson);
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandle(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className='App'>
        <h1> Hi, I'm a React app</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonHandler}>
          {' '}
          Toggle Name
        </button>
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

export default App;
