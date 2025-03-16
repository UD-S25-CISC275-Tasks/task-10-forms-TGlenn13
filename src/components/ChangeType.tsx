import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [currentType, setType] = useState<QuestionType>(
        "short_answer_question",
    );
    return (
        <span>
            <Button
                onClick={() => {
                    if (currentType === "short_answer_question") {
                        setType("multiple_choice_question");
                    } else {
                        setType("short_answer_question");
                    }
                }}
            >
                Change Type
            </Button>
            {currentType === "multiple_choice_question" ?
                <span> Multiple Choice Question </span>
            :   <span> Short Answer Question </span>}
        </span>
    );
}
