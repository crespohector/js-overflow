// frontend/src/components/SplashPageBodyContent/index.js
import React, { useState, useEffect } from 'react';
import './SplashPageBodyContent.css';
//----------------------------------------------------

function SplashPageBodyContent() {
    const [word, setWord] = useState('developer');
    const [quote, setQuote] = useState('');
    let counter = 0;
    const words = ["developer", "game developer", "system admin", "data scientist", "mobile developer"];
    const quotes = ["JS Overflow for Teams has been a resource for our entire company. Not only for developers to solve problems, it’s also enabled our sales field to answer technical questions that help them close deals.",
                "Engineers should help solve the hardest questions, the unknowns, where being familiar with how the product was built is essential. But we don’t want to keep answering solved problems over and over again. That’s where JS Overflow for Teams really helps.",
                "As we started to use [JS Overflow for Teams] and saw how nice it was to have a repository of information, we started to see it spread to other teams. Our customer support team started using it, our people success team started using it, next thing we knew, we had [Slack] integrations all over the place.",
                "What we love about JS Overflow for Teams is that it’s a very dynamic tool…there’s just so many ways to use this as a liaison between different teams and different knowledge bases."];

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter > 4) {
                counter = 0;
            }
            setWord(words[counter]);
            counter++;
        }, 2000);
        const randNum =  Math.floor(Math.random() * (Math.floor(3) - Math.ceil(0) + 1) + Math.ceil(0));
        setQuote(quotes[randNum]);
        return  () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="body-content-container">
            <div className="body-content-container_text">
                <p className="container_text text_1">Every</p>
                <p className="container_text text_2">{word}</p>
                <p className="container_text text_3">has a tab open to</p>
                <p className="container_text text_4">JS Overflow</p>
                <p className="welcome_text"><span className="quotation_mark">" </span>{quote}<span className="quotation_mark">"</span></p>
            </div>
        </div>
    );
}

export default SplashPageBodyContent;
