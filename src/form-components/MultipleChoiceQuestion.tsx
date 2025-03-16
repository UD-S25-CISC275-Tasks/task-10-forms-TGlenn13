import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, updateChoice] = useState(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Select
                value={choice}
                onChange={(c) => {
                    updateChoice(c.target.value);
                }}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            <span>{choice === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
