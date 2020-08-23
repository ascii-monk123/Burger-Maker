import React from 'react';
import Classes from './Button.module.css';

const Button = (props) => (
  <button
    className={[Classes.Button, Classes[props.buttonType]].join(' ')}
    onClick={props.clicked}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default Button;
