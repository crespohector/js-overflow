// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
//--------------------------------------------------------------
import NoMatch from './components/NoMatch';
import SplashPage from './components/SplashPage';
import Questions from './components/Questions';
import QuestionID from './components/QuestionID';
import AskQuestion from "./components/AskQuestion";


function App() {
  
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false); //Do I have to wait until user is loaded? What happens if User is not loaded?

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage isLoaded={isLoaded} />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/questions">
            <Questions />
          </Route>
          <Route  exact path="/questions/ask">
            <AskQuestion />
          </Route>
          <Route  exact path="/questions/:questionId">
            <QuestionID />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
