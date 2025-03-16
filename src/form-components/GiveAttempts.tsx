import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [requestAmount, setRequestAmount] = useState("");

    const subtractAttempts = () => {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    };

    const addAttempts = () => {
        const parsedAmount = parseInt(requestAmount);
        if (!isNaN(parsedAmount) && parsedAmount > 0) {
            setAttempts(attempts + parsedAmount);
        }
    };
    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Attempts Left: {attempts}</span>
            <div>
                <input
                    type="number"
                    value={requestAmount}
                    onChange={(amount) => {
                        setRequestAmount(amount.target.value);
                    }}
                    placeholder="Enter attempts"
                />
                <button onClick={subtractAttempts} disabled={attempts === 0}>
                    Use
                </button>
                <button onClick={addAttempts}>Gain</button>
            </div>
        </div>
    );
}
