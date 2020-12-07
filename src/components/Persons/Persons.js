import React, { Component, PureComponent } from 'react';

import Person from './Person/Person';
class Persons extends PureComponent {
  // static getDerivedStateFromProps() {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   // return true;
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot' };
  }
  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }
  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
          name={person.name}
          age={person.age}
          key={person.id}
        />
      );
    });
  }
}

export default Persons;
