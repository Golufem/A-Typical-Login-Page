import React from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import cardStyles from "./Welcome.module.css"

const Welcome = (props) => {
  return (
    <Card className = {cardStyles.welcome}>
      <h1>Welcome Back!</h1>
      <Button className = {cardStyles.button}  onClick = {props.onLogOut}>Log Out</Button>

    </Card>
  );
}

export default Welcome;
