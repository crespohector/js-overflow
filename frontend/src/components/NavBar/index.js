// frontend/src/components/NavBar/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './NavBar.css';

function NavBar({ isLoaded }){

  return (
    <div className="navbar-main-container">
      <div className="navbar-menu">
        <i class="fas fa-bars"></i>
        
      </div>

    </div>
  );
}


//-----------------------------------------------------------------------------------
// function NavBar({ isLoaded }){
//   const sessionUser = useSelector(state => state.session.user);

//   let sessionLinks;
//   if (sessionUser) {
//     sessionLinks = (
//       <ProfileButton user={sessionUser} />
//     );
//   } else {
//     sessionLinks = (
//       <>
//         <NavLink to="/login">Log In</NavLink>
//         <NavLink to="/signup">Sign Up</NavLink>
//       </>
//     );
//   }

//   return (
//     <ul>
//       <li>
//         <NavLink exact to="/">Home</NavLink>
//         {isLoaded && sessionLinks}
//       </li>
//     </ul>
//   );
// }
//--------------------------------------------------------------------------------------------
export default NavBar;
