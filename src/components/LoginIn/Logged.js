import React, {useState, useEffect, useReducer} from 'react';
import logStyles from './LogIn.module.css';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';

// //emailReducer
// const emailReducer = (state, action)=>{
//   if(action.type === "USER_INPUT"){
    // return({value: action.val, isValid: action.val.includes('@')})
//   }
//   if(action.type  === "INPUT_BLUR"){
//     return({value:state.value, isValid:state.value.includes('@')})
//   }
//   return(
//      {value: '', isValid: false}
//   )

// }
// const emailReducer = (action,state) =>{
//    if(action.type === "USER_INPUT"){
//     // return({value: action.val, isValid: (action.val.includes('@'))})
//     console.log(action.val)
//     return({value: action.val, isValid: action.val.includes('@',0)})
   
//    }
//    if(action.type === " INPUT_BLUR"){
//     // return ({value: state.value, isValid:(state.value.includes('@'))});
//     return({value:state.value, isValid:(state.value.includes('@'))})
//    }
   
   
   
//     return({value: '', isValid: false})
// }

// //PasswordReducer
// // const passwordReducer =(state, action) =>{
// //   if(action.type === 'USER_INPUT'){
//     // return({value: action.val, isvalid: (action.val.trim().length) > 6})
// //   }
// //   if(action.type === "INPUT_BLUR"){
// //     return({value:state.value, isValid: (state.value.trim().length) > 6 })
// //   }
// //   return({value:'', isValid:false})
// // }

// const passwordReducer = (state, action) =>{
//     if(action.type === 'USER_INPUT'){
//         return({value : action.val, isValid: (action.val.trim().length)> 6})
//     }
//     if (action.type ==='INPUT_BLUR'){
//         return({value: state.vaalue, isValid: (state.value.trim().lenght)>6})
//     }
    
    
//     return({value :'', isValid:false })
// }

  
 
 

const LogIn = (props) => {
  
  const [enteredMail, setEnteredMail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(null);
  const [passwordIsValid, setPasswordIsValid] = useState(null);
 


  // const[emailState, dispatchEmail]   =   useReducer( emailReducer, {value: '', isValid: null })

  // const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null})
  // const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', islValid: null})
  // const [emailState,dispatchEmail] = useReducer(emailReducer,{value: " ", isValid:null});
  // const [passwordState, dispatchPassword] =useReducer(passwordReducer, {value: " ", isValid:null})


  const [formIsValid, setFormIsValid] = useState(false)
  
  //object dectructuring of state
  // const {isValid:emailIsValid} = emailState;
  // const {isValid:passwordIsValid} = passwordState;
  
  
  useEffect(()=>{
  const identifier=  setTimeout(()=>{
      
      setFormIsValid(enteredMail.includes('@') && enteredPassword.trim().length > 6 );
      // setFormIsValid(emailState.isValid && passwordState.isValid);
      // setFormIsValid(  emailIsValid  &&  passwordIsValid    )
      // console.log(`email is valid ${emailIsValid}`);
      // console.log(`email is value ${emailState.value}`);
      // console.log(`password is valid ${passwordIsValid}`);
      // console.log(`password is value ${passwordState.value}`);
    },100);

    return ()=>{
      console.log('cleanup');
      clearTimeout(identifier)
    }


  },[enteredMail,enteredPassword])
  
  const emailChangeHandler = (e) =>{
      setEnteredMail(e.target.value);
      setEmailIsValid(enteredMail.includes('@'));
      //Noe reducer
    //  dispatchEmail({type: 'USER_INPUT', val: e.target.value});
    //  console.log( typeof   e.target.value);
    //  console.log(formIsValid);
  
     
  }
  const passwordChangeHandler = (e) =>{
    setEnteredPassword(e.target.value);
    setPasswordIsValid(enteredPassword.trim().length > 6);
    // dispatchPassword({type:'USER_INPUT', val:e.target.value});
    // console.log(formIsValid);

  }
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(enteredMail);
    console.log(enteredPassword)
    // console.log(emailState.value);
    // console.log(passwordState.value);
   props.LoggedIn(enteredMail,enteredPassword);
  // props.LoggedIn(emailState.value,passwordState.value);
  }
  const emailValidHandler = () =>{
    setEmailIsValid(enteredMail.includes('@'));
    // dispatchEmail({type: "INPUT_BLUR"});
  }
  const passwordValidHandler = ()=>{
    setPasswordIsValid(enteredPassword.trim().length > 6);
    // dispatchPassword({type: "INPUT_BLUR"});
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

