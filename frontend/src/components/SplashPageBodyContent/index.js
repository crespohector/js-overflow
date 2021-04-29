// frontend/src/components/SplashPageBodyContent/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SplashPageBodyContent.css';
//----------------------------------------------------

function SplashPageBodyContent() {

    return (
        <div className="body-content-container">
            <div className="body-content-container_text">
                <p className="container_text text_1">Every</p>
                <p className="container_text text_2">developer</p>
                <p className="container_text text_3">has a tab open to</p>
                <p className="container_text text_4">JS Overflow</p>
            </div>
        </div>
    );
}

export default SplashPageBodyContent;
