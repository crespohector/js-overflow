// frontend/src/components/SplashPage/index.js
import React from 'react';
import './SplashPage.css';
//----------------------------------------------------
import NavBar from '../NavBar';
import SplashPageBodyContent from '../SplashPageBodyContent';
import Footer from "../Footer";
import Sticky from 'react-sticky-el';

import {useContext} from 'react';
import {isLoadedContext} from '../../Context/isLoadedContext'

function SplashPage({ isLoaded }) {

  return (
    <div className="body-wrapper">
      <Sticky>
        <NavBar isLoaded={isLoaded} />
      </Sticky>
      <SplashPageBodyContent />
      <Footer />
    </div>
  );
}

export default SplashPage;
