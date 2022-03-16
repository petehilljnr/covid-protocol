import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';

const QuestionStyle = styled.div`
    position: relative;
    font-size: 2rem;
    font-weight: 700;
    color: white;
    width: 100%;
    background: black;
    border-radius: 5px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-color: orange;
    border-width: thick;
    border-style: solid;
`;

const QuestionCard = (props) => {
    return (
        <>
            <QuestionStyle>
                <span>{ props.question }</span>
            </QuestionStyle>
        </>
    )
};

const AnswerStyle = styled.div`
    position: relative;
    font-size: 2rem;
    font-weight: 700;
    color: black;
    width: 100%;
    background: white;
    border-radius: 5px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-color: orange;
    border-width: thick;
    border-style: solid;
`;

const OtherButtons = styled.div`
    position: relative;
    font-size: 2rem;
    font-weight: 700;
    width: 100%;
    border-radius: 5px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const AnswerCard = (props) => {

    const setAnswer = props.setAnswer;
    const setQuestion = props.setQuestion;
    const question = props.question;

    const handleBack = () => {
        setAnswer("");
        if(question > 0) {
            setQuestion(question - 1)
        }

    };

    const handleReset = () => {
        setAnswer("");
        setQuestion(0)
    };

    if(props.answer !== "") {
        return (
            <>
                <AnswerStyle>
                    <span>{ props.answer }</span>                    
                </AnswerStyle>
                <OtherButtons>
                <div><Button onClick = { handleBack }>Back</Button></div>
                <div><Button onClick = { handleReset }>Reset</Button></div>
                </OtherButtons>
            </>
        )
        }
    else {
        return (
            <>
            </>
        )
    }
};

export { QuestionCard, AnswerCard };
