// frontend/src/components/NavBar/index.js
import React, { useEffect, useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getQuestions} from '../../store/questions';
import './QuestionID.css';

// to-do This will render a simple page with the question div at top of page
// and fetch all the answers from the database that matches the questions id.
// then render all the answers.

//TO-DO to create a small simple form to submit an answer to the question and
// using AJAX to render the new answer to the question.

// advice: copy and paste the structure of the questions component.
// MAKE SURE TO AT LEAST WRITE OUT THE BEGINNING STAGE OF MAKING A FUNCTION COMPONENT TO GET SOME PRACTICE.



function QuestionID() {

    return (
    <div>
        <p>Welcome to a specfic question page</p>
    </div>
  );
}

// comment: "I have some JavaScript code that gives this error\n );\n  var i2 = document.getElementById('i2');\n
// createdAt: "2021-04-27T22:17:20.140Z"
// id: 1
// title: "Uncaught TypeError: Cannot read property \"value\" of undefined"
// updatedAt: "2021-04-27T22:17:20.140Z"

export default QuestionID;
