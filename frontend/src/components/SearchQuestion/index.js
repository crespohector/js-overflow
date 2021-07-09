import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Sticky from 'react-sticky-el';
import { getQuestions } from '../../store/questions';
import NavBar from '../NavBar';
import Footer from '../Footer';
// import './Questions.css';

function SearchQuestion() {
    const {query} = useParams();
    // const splitQuery = query.split(' ');
    const trimmedStr = query.trim();

    // console.log('original query: ', query);
    // console.log('-----trimmed search input from user: ', trimmedStr)
    // console.log('split query: ', splitQuery)

    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questions);
    const questionsArr = Object.values(questions);

    const filteredArr = questionsArr.filter(question => {
        console.log('---question title: ', question.title.toLowerCase())
        console.log('---TRIMMED STRING: ', trimmedStr.toLowerCase())

        console.log('---inside filtered arr: ', question.title.toLowerCase().includes(trimmedStr.toLowerCase()))

        return question.title.toLowerCase().includes(trimmedStr.toLowerCase());

        // for (let i = 0; i < splitQuery.length; i++) {
        //     return question.title.toLowerCase().includes(splitQuery[i].toLowerCase())
        // }
    })

    const countResults = filteredArr.length;


    useEffect(() => {
        dispatch(getQuestions());
    }, [dispatch])

    return (
        <>
            <Sticky>
                <NavBar />
            </Sticky>
            <div className="questions-main-container">
                <div className="questions-head-container">
                    <span className="questions-text">{`${countResults} Search Results`}</span>
                    <NavLink className="ask-question" to="/questions/ask">Ask Question</NavLink>
                </div>
                <div className="questions-body-container">
                    {filteredArr.map(question => (
                        <div key={question.id} className="post-question">
                            <NavLink className="post-question_navlink" to={`/questions/${question.id}`}>{question.title}</NavLink>
                            <p className="post-question_comment">{question.comment}</p>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default SearchQuestion;
