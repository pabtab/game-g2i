import React from "react";
import { useHistory } from "react-router-dom";

import dataText from "../../utils/dictionary";
import Title from "../../components/Title";
import Button from "../../components/Button";

import "./Home.scss";
import Container, { Header, Footer, Body } from "../../components/Container";


const labelsHome = dataText.home;

const Home = (props) => {

  const history = useHistory();

  const handleClickBegin = () => {
    history.push('questions');
  }

  return (
    <Container className="Home">
      <Header>
        <Title text={labelsHome.title} />
      </Header>
      <Body className="container">
        <p>
          {labelsHome.paragraph1}
        </p>
        <p>
          {labelsHome.paragraph2}
        </p>
      </Body>
      <Footer>
        <Button onClick={handleClickBegin}>{labelsHome.button}</Button>
      </Footer>
    </Container>
  )
};

export default Home;
