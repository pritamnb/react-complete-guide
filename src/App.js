// @ts-nocheck
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 1, name: 'Pritam', age: 24 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Sushi', age: 33 },
    ],
    otherState: 'Some other state',
    showPersons: true,
  });
  // console.log(personsState);

  const nameChangedHandler = (event, id) => {
    console.log('*******************', event.target.value, id);

    const personIndex = personsState.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...personsState.persons[personIndex] };

    // or
    // const person = Object.assign({},personsState.persons[personIndex]);
    person.name = event.target.value;
    const changedPerson = [...personsState.persons];
    console.log('############', person);

    changedPerson[personIndex] = person;
    console.log('*******************', changedPerson);
    setPersonsState({
      persons: changedPerson,
      ...personsState,
    });
    console.log(personsState);
  };
  const deletePersonHandle = (peronIndex) => {
    const persons = personsState.persons;
    persons.splice(peronIndex, 1);
    setPersonsState({ persons: persons, ...personsState });
  };
  const togglePersonHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({ ...personsState, showPersons: !doesShow });
  };
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };
  let persons = null;
  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandle(index)}
              changed={(event) => nameChangedHandler(event, person.id)}
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
      <button style={style} onClick={togglePersonHandler}>
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
};

export default App;
