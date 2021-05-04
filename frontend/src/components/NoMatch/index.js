import React from "react";
import {NavLink} from 'react-router-dom';
import './NoMatch.css';

const NoMatch = () => {

    return (
        <>
            <h1>Page not found</h1>
            <h2>Sorry, we couldn't find the page you requested</h2>
            <NavLink to="/">Home</NavLink>
        </>
    )
}

export default NoMatch;
