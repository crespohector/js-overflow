// frontend/src/components/NavBar/index.js
import React, { useEffect, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
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
    if (show) return ;
    setShow(true);
    e.currentTarget.classList.toggle('change');
  }

  const loginDemoUser = () => {
    const credential = "Demo-User";
    const password = "password";
    dispatch(sessionActions.login({ credential, password }))
  }

  //if user is logged in then render profile btn; else render login btn, sign up btn
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

  useEffect(() => {
    if (!show) return;

    const closeShow = () => {
      const divMenu = document.querySelector('.navbar-menu');
      setShow(false);
      if (divMenu == null) {
        return ;
      }
      divMenu.classList.toggle('change');
    }

    document.addEventListener('click', closeShow);
    return () => document.removeEventListener('click', closeShow);
  }, [show])

  return (
    <div className="navbar-main-container">
      <div id="menu" className="navbar-menu" onClick={changeMenuIcon}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      {show ? <div className="navbar-menu_links">
        <NavLink className="home" to="/" >Home</NavLink>
        <NavLink className="questions" to="/questions">Questions</NavLink>
      </div> : null}

      <NavLink className="navbar-img-container" to="/">
        <img className="js_logo" src={jsLogo} />
        <span className="navbar-img-text">overflow</span>
      </NavLink>

      <div className='navbar-user-container'>
        {isLoaded && sessionLinks}
      </div>

    </div>
  );
}

export default NavBar;
