// frontend/src/components/NavBar/index.js
import React, { useEffect, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './NavBar.css';

function NavBar({ isLoaded }) {
  const [show, setShow] = useState(false);

  const changeMenuIcon = (e) => {
    if (show === false) {
      setShow(true);
    }
    else {
      setShow(false);
    }
    e.currentTarget.classList.toggle('change');
  }


  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="navbar-main-container">
      <div className="navbar-menu" onClick={changeMenuIcon}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      {show === true ? <div className="navbar-menu_links">
        <NavLink className="home" to="/" onClick={refreshPage}>Home</NavLink>
        <NavLink className="questions" to="/questions">Questions</NavLink>
      </div> : null}

      <div className="navbar-img-container" onClick={refreshPage}>
        <img className="js_logo" src='img/js_logo.png' />
        <span className="navbar-img-text">overflow</span>
      </div>

      <div>
        <NavLink className="login" to='/login'>Log in</NavLink>
        <NavLink className="signup" to='/signup'>Sign in</NavLink>
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
