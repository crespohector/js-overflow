// frontend/src/App.js
import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
//--------------------------------------------------------------
import NoMatch from './components/NoMatch';
import SplashPage from './components/SplashPage';
import Questions from './components/Questions';
import QuestionID from './components/QuestionID';
import AskQuestion from "./components/AskQuestion";
import ProfilePage from "./components/ProfilePage";
import SearchQuestion from './components/SearchQuestion';

import {isLoadedContext} from './Context/isLoadedContext';

function App() {

  const isLoaded = useContext(isLoadedContext);

  return (
    <>
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <SplashPage />
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
            <Route exact path="/questions/ask">
              <AskQuestion />
            </Route>
            <Route exact path="/questions/:questionId">
              <QuestionID />
            </Route>
            <Route exact path="/users/:userId">
              <ProfilePage />
            </Route>
            <Route exact path="/search/:query">
              <SearchQuestion />
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
