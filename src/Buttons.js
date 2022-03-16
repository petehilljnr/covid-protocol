import styled from 'styled-components';

const NoButtonStyle = styled.button`
    border: none;
    background: orange;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 15px;
    color: white;
    font-size: 2rem;
    margin: 1rem;
`;

const NoButton = (props) => {

    const setQuestion = props.setQuestion;
    const last_question = props.last_question;
    const question_num = props.question_num;
    const setAnswer = props.setAnswer;

    const handleClick = () => {
        if(question_num + 1 < last_question) {
            setQuestion(question_num + 1);
            setAnswer("")
        }
        else {
            setAnswer(props.answer);            
        }
    }

    return (
        <>
        <NoButtonStyle className="float-start" onClick={ handleClick }>
            No
        </NoButtonStyle>
        </>
    )
};

const YesButtonStyle = styled.button`
    border: none;
    background: orange;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 15px;
    color: white;
    font-size: 2rem;
    margin: 1rem;
`;

const YesButton = (props) => {

    const answer = props.answer;
    const setAnswer = props.setAnswer;

    const handleClick = () => {
        setAnswer(answer);
        }

    return (
        <>
        <YesButtonStyle className="float-end" onClick={ handleClick }>
            Yes
        </YesButtonStyle>
        </>
    )
};

export { NoButton, YesButton };