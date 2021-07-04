import React, { createContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from "../store/session";

export const isLoadedContext = createContext();

export const IsLoadedProvider = (props) => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);


    return (
        <isLoadedContext.Provider value={isLoaded}>
            {props.children}
        </isLoadedContext.Provider>
    )
}
