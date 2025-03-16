import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [status, setStatus] = useState<boolean>(false);
    return (
        <div>
            <p>Attempts Remaining: {attempts}</p>

            {/* Start Quiz Button */}
            <Button
                onClick={() => {
                    setStatus(true);
                    setAttempts(attempts - 1);
                }}
                disabled={status || attempts === 0}
            >
                Start Quiz
            </Button>

            <Button
                onClick={() => {
                    setStatus(false);
                }}
                disabled={!status}
            >
                Stop Quiz
            </Button>

            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={status}
            >
                Mulligan
            </Button>
        </div>
    );
}
