import React, {useContext} from 'react';
import navStyles from './Navigation.module.css'
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';

const Navigation = () => {
  const ctx = useContext(AuthContext)
  
  
  
//   const logOutHere =()=>{
//     props.logOut()
// }

 const isloged = ctx.isLoggedIn
 
  return (
    
    <nav className={navStyles.nav}>
        <ul >
            {isloged && <li><a > User</a></li>}
            { isloged &&<li><a> Admin</a></li>}
            {isloged && <li><Button className= {navStyles.button} onClick = { ctx.isLoggedOut}>LogOut</Button></li>
          }
        
        </ul>
    </nav>
   
  );
}

export default Navigation;
