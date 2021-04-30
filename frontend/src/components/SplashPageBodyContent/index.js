// frontend/src/components/SplashPageBodyContent/index.js
import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SplashPageBodyContent.css';
//----------------------------------------------------

function SplashPageBodyContent() {
    const [word, setWord] = useState('developer');
    let counter = 0;
    const words = ["developer", "game developer", "system admin", "data scientist", "mobile developer"];

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter > 4) {
                counter = 0;
            }
            setWord(words[counter]);
            counter++;
        }, 2000);
    }, []);


    return (
        <div className="body-content-container">
            <div className="body-content-container_text">
                <p className="container_text text_1">Every</p>
                <p className="container_text text_2">{word}</p>
                <p className="container_text text_3">has a tab open to</p>
                <p className="container_text text_4">JS Overflow</p>
            </div>
        </div>
    );
}

export default SplashPageBodyContent;
