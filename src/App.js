
import React, { useState, useEffect } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import LogIn from './components/LoginIn/LogIn';
import Welcome from './components/Welcome/Welcome';
import AuthContext from './components/store/auth-context';



function App() {
const [isloggedIn, setIsLoggedIn] = useState(false)
useEffect(()=>{
    const userLoginStored = localStorage.getItem("loggedin")
if (userLoginStored === '1'){
    setIsLoggedIn(true)
}

}, [])


const logInHandler = (email,password) =>{
    setIsLoggedIn(true)
    localStorage.setItem('loggedin', '1');
}
const logOutHandler = (email,password) =>{
    localStorage.removeItem("loggedin")
    setIsLoggedIn(false)
}



 return(
//   <React.Fragment>
    <AuthContext.Provider value= {
        {isLoggedIn: isloggedIn, isLoggedOut: logOutHandler}
    }>
      <MainHeader  onLogOut = {logOutHandler}></MainHeader>
      {!isloggedIn &&<LogIn LoggedIn = {logInHandler}></LogIn>}
     {isloggedIn && <Welcome onLogOut = {logOutHandler} ></Welcome>}
     </AuthContext.Provider>
//   </React.Fragment>
 
 )
  
}

export default App;
