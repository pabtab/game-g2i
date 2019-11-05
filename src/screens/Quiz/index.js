import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";

import Container, { Header, Body, Footer } from "../../components/Container";
import Title from "../../components/Title";
import Button from "../../components/Button";
import dataText from "../../utils/dictionary";
import { getQuestionsAction } from "../../redux/actions/questions.actions";
import { setResponseAction } from "../../redux/actions/setResponses.actions";
import Card from "../../components/Card";

const labelsQuiz = dataText.questions;

const Quiz = () => {
  const [cardNumber, setCardNumber] = useState(0);
  const { payload: questionsList, isLoading } = useSelector(state => state.Questions);
  let questionData = questionsList[cardNumber]; 

  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    dispatch(getQuestionsAction());
  }, [])

  const handleClickAnswered = (selected) => {
    const nextCard = cardNumber + 1;
    
    if (nextCard <= questionsList.length) {
      dispatch(setResponseAction(selected));
      setCardNumber(nextCard);
      if (nextCard === 10) {
        history.push('results');
      }
    }
  }

  const renderCards = () => {
    return (
      <section>
        <Card
          text={questionData.question}
        />
        <span className="pagination">{cardNumber + 1} of {questionsList.length}</span>
      </section>
    )
  }

  return (
    <Container className="Quiz">
      {
        !isLoading && questionData
        ? (
          <>
            <Header>
              <Title text={questionData.category} />
            </Header>
            <Body className="container">
              {renderCards()}
            </Body>
            <Footer>
              <Button circle circleState={false} onClick={() => handleClickAnswered(false)}>
                {labelsQuiz.false}
              </Button>
              <Button circle circleState={true} onClick={() => handleClickAnswered(true)}>
                {labelsQuiz.true}
              </Button>
            </Footer>
          </>
        )
        : (
          <div>
            isLoading
          </div>
        )
        
      }
    </Container>
  )
};

export default Quiz;
