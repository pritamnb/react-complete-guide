import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from '../Person/Person.css';
import Aux from '../../../hoc/AuxTag';
import withClass from '../../../hoc/withClass';
class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        {/* <div key='r1' className={classes.Person}> */}
        <p key='i1' onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} year(s) old!
        </p>
        <p key='i2'>{this.props.children}</p>
        <input
          key='i3'
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
        {/* </div> */}
      </Aux>
    );
  }
}
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};
export default withClass(Person, classes.Person);
