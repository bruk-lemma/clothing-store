import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/084 crown.svg';
import './header.style.scss';
import { auth   } from '../../firebase/firebase.utils';
const Header=({currentUser})=>(
    <div className="header">
         <Link to='/'>
             <Logo className='logo' />   
         </Link>
         <div className="options">
             <Link className="option" to='/shop'>SHOP</Link>
             <Link className="option" to='/shop'>Contact</Link>
              
              {
                  currentUser ?
                 ( <div className='option' onClick={()=> auth.signOut()}>Sign Out</div>)
                  :
                 ( <Link className='option' to='/signin'>Sign In</Link>)

              }
        
         </div>
        
    </div>
);

export default Header;