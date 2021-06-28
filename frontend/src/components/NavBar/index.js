// frontend/src/components/NavBar/index.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import './NavBar.css';

import jsLogo from "../../images/js_logo.png";

function NavBar({ isLoaded }) {
  const [show, setShow] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const changeMenuIcon = (e) => {
    if (show) {
      setShow(false);
    }
    else {
      setShow(true);
    }
    e.currentTarget.classList.toggle('change');
  }

  const loginDemoUser = () => {
    const credential = "Demo-User";
    const password = "password";
    dispatch(sessionActions.login({ credential, password }))
}

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <button className="demo_user" onClick={loginDemoUser}>Demo User</button>
        <NavLink className="login" to='/login'>Log in</NavLink>
        <NavLink className="signup" to='/signup'>Sign up</NavLink>
      </>
    );
  }

  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="navbar-main-container">
      <div id="menu" className="navbar-menu" onClick={changeMenuIcon}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      {show ? <div className="navbar-menu_links">
        <NavLink className="home" to="/" onClick={refreshPage}>Home</NavLink>
        <NavLink className="questions" to="/questions">Questions</NavLink>
      </div> : null}

      <div className="navbar-img-container" onClick={refreshPage}>
        <img className="js_logo" src={jsLogo} />
        <span className="navbar-img-text">overflow</span>
      </div>

      <div className='navbar-user-container'>
        {isLoaded && sessionLinks}
      </div>

    </div>
  );
}

export default NavBar;
