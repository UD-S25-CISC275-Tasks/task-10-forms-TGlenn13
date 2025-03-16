import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [revealed, setRevealed] = useState<boolean>(false);
    const [answer] = useState<number>(42);
    return (
        <span>
            <Button
                onClick={() => {
                    setRevealed(!revealed);
                }}
            >
                Reveal Answer
            </Button>
            {revealed && <span> {answer} </span>}
        </span>
    );
}
