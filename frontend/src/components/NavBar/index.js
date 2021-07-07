// frontend/src/components/NavBar/index.js
import React, { useEffect, useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import { isLoadedContext } from '../../Context/isLoadedContext';
import './NavBar.css';

import jsLogo from "../../images/js_logo.png";

function NavBar() {
  let history = useHistory();
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const contextIsloaded = useContext(isLoadedContext)

  const changeMenuIcon = (e) => {
    if (show) return;
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

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const submitSearch = () => {
    if (search) {
      history.push('/questions');
    }
    setSearch('');
    return ;
  }

  useEffect(() => {
    if (!show) return;

    const closeShow = () => {
      const divMenu = document.querySelector('.navbar-menu');
      setShow(false);
      if (divMenu == null) {
        //if div is null then return nothing to avoid error
        return;
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
        <div className="user-container">
          {!sessionUser ? sessionLinks :
            <>
              <button onClick={logout}>Log Out</button>
              <NavLink className="my_profile_btn" to={`/users/${sessionUser.id}`}>My Profile</NavLink>
            </>
          }
        </div>
      </div> : null}

      <NavLink className="navbar-img-container" to="/">
        <img className="js_logo" src={jsLogo} />
        <span className="navbar-img-text">overflow</span>
      </NavLink>

      <div className="navbar-search_container">
          <input className="navbar-search_input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search.."/>
          <button className="navbar-search_btn" type="button" onClick={submitSearch} ><i className="fas fa-search"></i></button>
      </div>

      <div className='navbar-user-container'>
        {contextIsloaded && sessionLinks}
      </div>

    </div>
  );
}

export default NavBar;
