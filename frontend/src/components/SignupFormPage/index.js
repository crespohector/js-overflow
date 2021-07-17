// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";

import Footer from '../Footer/';
import NavBar from '../NavBar/';
import './SignupForm.css';


function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/questions" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
      <NavBar />
      <form className="signup_form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div>
          <label className="login_form-label_email">
            Email
            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login_form-input_email"
                required
              />
            </div>
          </label>
        </div>
        <div>
          <label className="login_form-label_email">
            Username
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
        <div>
          <label className="login_form-label_password">
            Confirm Password
            <div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="login_form-input_password"
                required
              />
            </div>
          </label>
        </div>
        <button className="login_form-btn_submit" type="submit">Sign Up</button>
      </form>
      <div className="sign_up_link_container">
        <span className="sign_up_span" >Already have an account? <NavLink className="sign_up_link" to="/login">Log in</NavLink></span>
      </div>
      <div className="login_footer">
        <Footer />
      </div>
    </>
  );
}

export default SignupFormPage;
