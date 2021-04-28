// frontend/src/components/SplashPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SplashPage.css';
//----------------------------------------------------
import NavBar from '../NavBar';

function SplashPage({isLoaded}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  return (
      <>
        <NavBar isLoaded={isLoaded} />
      </>
  );
}

export default SplashPage;
