# Welcome to JS Overflow!
## Live Link: https://js-overflow.onrender.com/
A clone of stackoverflow.com with a focus on the topics of JavaScript. Users are able to post Q&A's and keep track of it in their profile page.

![Jsoverflowsplashpage](https://user-images.githubusercontent.com/76798385/160947802-87b79a71-207f-4263-97b1-1619b0f40f06.png)


## MVP
  * Users can create an account, log in, and log out.
  * Users can use a demo log in to try the site.
  * Logged out users are directed to the home page.
  * Logged in users can create questions.
  * Logged in users can answer a question.
  * Logged in users can edit and delete their own answers.
  * Guest and logged in users can search for specific questions.

## BONUS / STRETCH GOALS
  * Logged in users can upvote/downvote an answer.
  * Logged in and guest users have access to question categories.
  * Logged in users have the ability to post code snippets.

## TECHNOLOGIES USED
  * React-Redux
  * Javascript
  * Express
  * Sequelize
  * PostgreSQL
  * CSS
  * HTML

## DATABASE SCHEMA

![js_overflow_db_img](https://user-images.githubusercontent.com/76798385/116945443-a079f480-ac45-11eb-9f3a-03b7a6017fdd.png)

## Technical Showcase

This is the questions state in the Redux store where we use thunk actions to fetch to the API. Then, dispatching an action and updating the store using the questions reducer.
```javascript
import { csrfFetch } from './csrf';

const ALL_QUESTIONS = 'questions/ALL_QUESTIONS';
const ADD_QUESTIONS = 'questions/ADD_QUESTIONS';

const allQuestions = (data) => {
    return {
        type: ALL_QUESTIONS,
        data
    };
}

const addOneQuestion = (data) => {
    return {
        type: ADD_QUESTIONS,
        data
    }
}

export const getQuestionsByUser = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/users/${userId}/questions`);
    const data = await response.json();
    dispatch(allQuestions(data));
}

export const getQuestions = () => async dispatch => {
    const response = await csrfFetch('/api/questions');
    const data = await response.json();
    dispatch(allQuestions(data));
}

export const addQuestions = (question) => async dispatch => {
    const {title, comment, user_id} = question;
    const response = await csrfFetch('/api/questions', {
        method: "POST",
        body: JSON.stringify({title, comment, user_id})
    });
    const data = await response.json();
    dispatch(addOneQuestion(data));
    return response;
}


const questionsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case ALL_QUESTIONS:
            newState = {...state};
            action.data.forEach(question => {
                newState[question.id] = question;
            });
            return newState;
        case ADD_QUESTIONS:
            newState = {...state};
            newState[action.data.question.id] = action.data.question;
            return newState;
        default:
            return state;
    }
};

export default questionsReducer;

```

When the user lands on the '/questions' route, it will render all the questions by dispatching a thunk action then use the useSelector to grab all
the questions from the redux store.
```javascript
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getQuestions} from '../../store/questions';
import Footer from '../Footer';
import NavBar from "../NavBar";
import './Questions.css';

function Questions() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const questionsArr = Object.values(questions);

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch])

  return (
    <div className="questions-main-container">
      <div className="questions-head-container">
        <span className="questions-text">All Questions</span>
        <NavLink className="questions-home" to="/">Home</NavLink>
        <NavLink className="ask-question" to="/questions/ask">Ask Question</NavLink>
      </div>
      <div className="questions-body-container">
        {questionsArr.map(question => (
          <div key={question.id} className="post-question">
            <h3>Question</h3>
            <NavLink className="post-question_navlink" to={`/questions/${question.id}`}>{question.title}</NavLink>
            <p className="post-question_comment">{question.comment}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Questions;


```
Simple, clean, and modern styling features such as subtle color changes, hover effects, and menu transitions making the webpage engaging, while keeping it clutter free to focus on the functionality of the webpage/tool.

```CSS
/* main content container */
.body-content-container {
    display: flex;
    background-image: url('http://localhost:3000/img/simple_dark_bg.png');
    resize: both;
    background-size: contain;
    background-color: rgb(39, 39, 39);
    max-width: 2000px;
    min-height: 800px;
    margin: 0px 40px;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 10px;
}

/* content container */
.body-content-container_text {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    color: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2em;
    overflow: visible;
    margin: auto;
    text-align: center;
}


/* text-2 */
.text_2 {
    color: #f3e11d;
    font-weight: 600;
}

.welcome_text {
    display:block;
    margin: auto;
    color: #f3e11d;
    font-size: 0.6em;
    border-top: 1px solid darkgray;
    padding-top: 12px;
}
.quotation_mark {
    color: rgb(211, 211, 211);
    font-size: 1em;
    font-weight: 600;
}

```


# **Database Schema**

## `users`

| Column Name | Data Type | Details               |
|-------------|-----------|-----------------------|
| id          | Integer   | Not Null, Primary Key |
| displayName | String    | Not Null              |
| email       | String    | Not Null, unique      |
| hashedPW    | String    | Not Null              |
| created_at  | dateTime  | Not Null              |
| update_at   | dataTime  | Not Null              |

* unique: true`

## `questions`

| Column Name | Data Type   | Details               |
|-------------|-------------|-----------------------|
| id          | Integer     | Not Null, Primary Key |
| title       | String(150) | Not Null              |
| comment     | text        | Not Null              |
| user_id     | Integer     | Not Null, Foreign Key |
| created_at  | dateTime    | Not Null              |
| update_at   | dataTime    | Not Null              |


* `user_id` references `users` table

## `answers`

| Column Name  | Data Type | Details               |
|--------------|-----------|-----------------------|
| id           | Integer   | Not Null, Primary Key |
| comment      | text      | Not Null              |
| questions_id | Integer   | Not Null, Foreign Key |
| user_id      | Integer   | Not Null, Foreign Key |
| created_at   | dateTime  | Not Null              |
| update_at    | dateTime  | Not Null              |


* `questions_id` references `questions` table
* `user_id` references `users` table

## ENVIORNMENT DEPENDENCIES/INSTALLATION
   * Bcryptjs
   * Cookie parser
   * Csurf
   * Express validators
   * Heroku

## Run This Project Locally

### Backend
1. Run `npm install` in the /backend directory.
2. Create a `.env` file in the /backend directory to define the environment variables. Follow the example below.
```
PORT=5000
DB_USERNAME=«database user here»
DB_PASSWORD=«auth_app user password»
DB_DATABASE=«database name here»
DB_HOST=localhost
JWT_SECRET=«generate_strong_secret_here»
JWT_EXPIRES_IN=604800
```
3. Run `openssl rand -base64 10` to generate a random JWT secret.
4. Create a user using the same creddentials in the `.env` file.
```
psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"
```
5. Create the database.
```
npx dotenv sequelize db:create
```
6. Generate a migration and model file *(This is already created)*.
```
npx sequelize model:generate --name User --attributes username:string,email:string,hashedPassword:string
```
7. Migrate the all the models.
```
npx dotenv sequelize db:migrate
```
8. If there is no error in migrating but you want to change the migration file,
remember to undo the migration first, change the file, then migrate again.
```
npx dotenv sequelize db:migrate:undo
```
9. Run this to generate a user seeder file. *(Already created)*
```
npx sequelize seed:generate --name demo-user
```
10. Migrate the seed file.
```
npx dotenv sequelize db:seed:all
```
11. Command to undo the seed migration files.
```
npx dotenv sequelize db:seed:undo:all
```
12. Run `npm start` in the /backend directory to start up the express server.

### Frontend
1. Run `npm install` in the /frontend directory.
2. Run `npm start` in the /frontend directory to start up the react server.
