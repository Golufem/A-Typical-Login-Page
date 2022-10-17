import React from 'react';
import btnStyles from './Button.module.css'


const Button = (props) => {
  return (
    <div>
      <button className={`${btnStyles.button} ${props.className}`}
      disabled = {props.disabled} onClick = {props.onClick}>
       {props.children}
      </button>
    </div>
  );
}

export default Button;
