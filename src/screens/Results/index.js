import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useHistory, Redirect } from "react-router-dom";

import dataText from "../../utils/dictionary";
import Container, { Header, Body, Footer } from "../../components/Container";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Alert from "../../components/Alert";
import DecodeHtml from "../../components/DecodeHtml";

import { resetQuestionsAction } from "../../redux/actions/questions.actions";
import { resetResponsesAction } from "../../redux/actions/setResponses.actions";
import "./Results.scss";

const labelsResults = dataText.results;

const Results = () => {
  const { payload: questionsList } = useSelector(state => state.Questions);
  const [counterGood, setCounterGood] = useState(null);
  let counterGoodOnes = 0;
  const responses = useSelector(state => state.Responses);
  
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setCounterGood(counterGoodOnes);
  }, [counterGoodOnes])

  const handleClickAgain = () => {
    dispatch(resetQuestionsAction());
    dispatch(resetResponsesAction());
    history.push('/');
  }

  const renderResult = () => {
    return questionsList.map((question, index) => {
      let componentAlert;

      if (question.correct_answer.toLowerCase() === String(responses[index])) {
        counterGoodOnes++;
        componentAlert = (
          <Alert type="success">
            <FaPlus />
            <DecodeHtml className="alert-text" text={question.question} />
          </Alert>
        );
      } else {
        componentAlert = (
          <Alert type="default">
            <FaMinus />
            <DecodeHtml className="alert-text" text={question.question} />
          </Alert>
        );
      }

      return <li key={question.question}>{componentAlert}</li>;
    })
  }

  if (!responses.length) {
    return <Redirect to="/"/>
  }

  return (
    <Container className="Results">
      <Header>
        <Title text={`${labelsResults.title} ${counterGood} / ${questionsList.length}`} />
      </Header>
      <Body className="container">
        {renderResult()}
      </Body>
      <Footer>
        <Button onClick={handleClickAgain}>{labelsResults.button}</Button>
      </Footer>
    </Container>
  )
};

export default Results;
