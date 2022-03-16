import 'bootstrap/dist/css/bootstrap.min.css';
import { QuestionCard, AnswerCard } from './Cards';
import QuestionData from './Questions'
import React, { useState } from 'react';
import { NoButton, YesButton } from './Buttons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
const questions = QuestionData;

function App() {

  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  
  return (
    <Container fluid style={{ background: "#282c34", minHeight: "100vh"}}>
      <Header />
      <Row>
        <Col sm={{ span: 4, offset: 4 }}>
          <QuestionCard question={questions[question].question} />  
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 4, offset: 4}}>
          <NoButton 
            question_num={ question } 
            last_question={ questions.length } 
            setQuestion={ setQuestion } 
            setAnswer={ setAnswer }
            answer={ questions[question].path_no } 
          />
          <YesButton 
            answer={ questions[question].path_yes }  
            setAnswer = { setAnswer }
          />
        </Col>
      </Row>
      <Row>        
        <Col sm={{ span: 4, offset: 4 }}>
          <AnswerCard 
            answer={ answer }
            question={ question }
            setQuestion={ setQuestion } 
            setAnswer={ setAnswer } 
          />  
        </Col>
      </Row>
    </Container>
  );
}

export default App;
