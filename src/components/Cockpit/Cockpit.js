import React, { useEffect } from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {
  // useEffect() // we can use many useEffect()
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // http request...
    const timer = setTimeout(() => {
      alert('Saved data to cloud');
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js cleanup work in useEffect');
    };
  }, []);
  let btnClass = '';

  let assignedClasses = [];
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1> {props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        {' '}
        Toggle Persons
      </button>
    </div>
  );
};
export default React.memo(cockpit);
