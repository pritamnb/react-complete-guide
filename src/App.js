import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Pritam', age: 24 },
      { name: 'Manu', age: 29 },
      { name: 'Sushi', age: 33 },
    ],
    otherState: 'Some other state',
  });
  console.log(personsState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DONT DO THIS this.state.persons[0].name = 'Pritam Bhalerao';
    setPersonsState({
      persons: [
        { name: 'Pritam Bhalerao', age: 24 },
        { name: 'Manu', age: 29 },
        { name: 'Sushi', age: 33 },
      ],
    });
  };
  return (
    <div className='App'>
      <h1> Hi, I'm a React app</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}> Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        My Hobbies: Cricket
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement('h1', null, "Hi, I'm a React App!!!")
  // );
};

export default App;
