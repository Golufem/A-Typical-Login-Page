import React from 'react';
import styles from './MainHeader.module.css';
import Navigation from '../Navigation/Navigation';

const MainHeader = (props) => {
  let you = "come"
  const me  = you.includes('@');
  console.log(me)
  return (
    <div className={styles.mainheader}>
      <p>A Typical Login Page</p> 
      <Navigation  
      ></Navigation>
    </div>
  );
}

export default MainHeader;
