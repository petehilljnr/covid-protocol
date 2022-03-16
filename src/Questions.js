const QuestionData = [
    { 
        id: 1,
        question : "Are you currently testing positive for Covid-19?",
        path_yes: "You are a positive case.  You need to work home for a minimum of 10 days.  Come back to work 72 hours after symptoms have stopped",
    },
    { 
        id: 2,
        question : "Are living with someone who currently has Covid-19?",
        path_yes: "You are a household contact.  You need to work home for a minimum of 10 days",
    },
    { 
        id: 3,
        question : "Have you spent time in the last 72 hours with someone who has since tested positive for Covid-19?",
        path_yes: "You are a close contact.  You need to work home for a minimum of 7 days",
    },
    { 
        id: 4,
        question : "Do you have any Covid-19-like symptoms?",
        path_yes: "You need to work from home until you're symptom free for 72 hours",
        path_no: "You're all good.  Work to your normal routine"
    }
];

export default QuestionData;
