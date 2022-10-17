import React from 'react';
import cardStyle from './Card.module.css'

const Card = (props) => {
    const classcard = `${cardStyle.card} ${props.className}`
  return (
    <div className={classcard}>
      {props.children}
    </div>
  );
}

export default Card;
