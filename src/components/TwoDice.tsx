import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeft] = useState<number>(1);
    const [rightDie, setRight] = useState<number>(2);
    const gameStatus =
        leftDie === 1 && rightDie === 1 ? "Lose"
        : leftDie === rightDie ? "Win"
        : "";
    return (
        <div>
            <p>
                <span data-testid="left-die"> {leftDie} </span>
                <span data-testid="right-die"> {rightDie} </span>
            </p>
            <Button
                onClick={() => {
                    setLeft(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setRight(d6());
                }}
            >
                Roll Right
            </Button>
            {gameStatus && <p>{gameStatus}</p>}
        </div>
    );
}
