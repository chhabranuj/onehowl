import { useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";
import helpQuestionsLayoutStyle from "./helpQuestionsLayout.module.css";

const HelpQuestionsLayout = (props) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className={helpQuestionsLayoutStyle.helpContainer}>
            <div className={helpQuestionsLayoutStyle.questionContainer} onClick={() => setShowAnswer(!showAnswer)}>
                <p className={helpQuestionsLayoutStyle.question}>{props.data.question}</p>
                {showAnswer? <BiUpArrow style={{color: "red", width: "10%"}} />: <BiDownArrow style={{color: "#3bb77e",  width: "10%"}} />}
            </div>
            {showAnswer && <p className={helpQuestionsLayoutStyle.answer}>{props.data.answer}</p>}
        </div>
    );
}

export default HelpQuestionsLayout;