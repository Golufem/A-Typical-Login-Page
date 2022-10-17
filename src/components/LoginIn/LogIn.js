import React, {useState, useEffect, useReducer} from 'react';
import logStyles from './LogIn.module.css';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';

// const emReducer = (state,action)=>{
//   if(action.type === "INPUT DATA"){
//     return({covalue: action.val, valid: action.val.includes('@')})
//   }
//   if(action.type === "INPUT BLUR"){
//     return({covalue:state.covalue, valid: state.covalue.includes('@')})
//   }

//   return({covalue: " ", valid:null});
// }



const LogIn = (props) => {
  
  const [enteredMail, setEnteredMail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(null);
  const [passwordIsValid, setPasswordIsValid] = useState(null);
 
  


  const [formIsValid, setFormIsValid] = useState(false);


  // const [emailState, dispatchEm] = useReducer(emReducer, {covalue: "", valid:false});
  
  
  
  useEffect(()=>{
  const identifier=  setTimeout(()=>{
      
      setFormIsValid(emailIsValid&& passwordIsValid );
      },100);

    return ()=>{
      console.log('cleanup');
      clearTimeout(identifier)
    }

  },[emailIsValid,passwordIsValid])
  
  const emailChangeHandler = (e) =>{
    // dispatchEm({type: 'INPUT DATA', val: e.target.value});
    // dispatchEm({type: 'INPUT BLUR'});

      setEnteredMail(e.target.value);
      setEmailIsValid(enteredMail.includes('@'));
   
     
  }
  const passwordChangeHandler = (e) =>{
    setEnteredPassword(e.target.value);
    setPasswordIsValid(enteredPassword.trim().length > 6);

  }
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(enteredMail);
    console.log(enteredPassword)

   props.LoggedIn(enteredMail,enteredPassword);
 }
  const emailValidHandler = () =>{
    setEmailIsValid(enteredMail.includes('@'));
    // dispatchEm({action: 'INPUT BLUR'});
  }
  const passwordValidHandler = ()=>{
    setPasswordIsValid(enteredPassword.trim().length > 6);
    
  }
  
  
  return (
    <Card className={logStyles.login}>
      <form className={logStyles.form} onSubmit = {submitHandler}>
      <div className={logStyles.inputfield}>
            <label>Email:</label>
            <input type= 'email'
             className={`${emailIsValid===false ?logStyles.invalid: ''} `}
            onChange={emailChangeHandler}
            onBlur = {emailValidHandler}/>
      </div>
      <div className={logStyles.inputfield}>
            <label>Password:</label>
            <input type= 'password'
            className={`${passwordIsValid===false ? logStyles.invalid: ''}`}
            onChange={passwordChangeHandler}
            onBlur= {passwordValidHandler}/>
      </div>
      <Button className = {logStyles.button}  type= 'button' disabled ={!formIsValid}> Log in</Button>
      </form>
    </Card>
  );
}

export default LogIn;

