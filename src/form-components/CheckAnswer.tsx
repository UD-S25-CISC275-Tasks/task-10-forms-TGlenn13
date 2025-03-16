import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState("");

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={answer}
                onChange={(updateAnswer) => {
                    setAnswer(updateAnswer.target.value);
                }}
                placeholder="Enter your answer"
            />
            <span>{answer === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
