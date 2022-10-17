import React, {useContext} from 'react';
import navStyles from './Navigation.module.css'
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';

const Navigation = () => {
  const ctx = useContext(AuthContext)
  
  
  
//   const logOutHere =()=>{
//     props.logOut()
// }
 
  return (
    
    <nav className={navStyles.nav}>
        <ul >
            {ctx.isLoggedIn && <li><a > User</a></li>}
            { ctx.isLoggedIn &&<li><a> Admin</a></li>}
            {ctx.isLoggedIn && <li><Button className= {navStyles.button} onClick = { ctx.isLoggedOut}>LogOut</Button></li>
          }
        
        </ul>
    </nav>
   
  );
}

export default Navigation;
