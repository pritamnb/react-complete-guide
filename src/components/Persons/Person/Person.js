import React from "react";
import classes from "../Person/Person.css";
const person = (props) => {
  console.log("[Person.js] rendering...");
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} year(s) old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default person;
