// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';

import Footer from '../Footer/';
import NavBar from '../NavBar/';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/questions" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <>
      <NavBar />
      <form className="login_form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div>
          <label className="login_form-label_email">
            Email
            <div>
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                className="login_form-input_email"
                required
              />
            </div>
          </label>
        </div>
        <div>
          <label className="login_form-label_password">
            Password
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login_form-input_password"
                required
              />
            </div>
          </label>
        </div>
        <button className="login_form-btn_submit" type="submit">Log In</button>
      </form>
      <div className="sign_up_link_container">
        <span className="sign_up_span" >Don't have an account? <NavLink className="sign_up_link" to="/signup">Sign up</NavLink></span>
      </div>
      <div className="login_footer">
        <Footer />
      </div>
    </>
  );
}

export default LoginFormPage;
