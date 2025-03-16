import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "maroon",
        "purple",
        "orange",
        "pink",
        "cyan",
    ];
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {colors.map((color) => (
                    <label
                        key={color}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                        }}
                    >
                        <Form.Check
                            type="radio"
                            name="color-options"
                            value={color}
                            checked={selectedColor === color}
                            onChange={(c) => {
                                setSelectedColor(c.target.value);
                            }}
                            inline
                        />
                        <span
                            style={{
                                backgroundColor: color,
                                color: "black",
                                padding: "5px 5px",
                                borderRadius: "5px",
                                display: "inline-block",
                            }}
                        >
                            {color}
                        </span>
                    </label>
                ))}
            </div>
            <p>
                You have chosen{" "}
                <span
                    style={{
                        backgroundColor: selectedColor,
                        color: "black",
                        padding: "5px 5px",
                        borderRadius: "5px",
                    }}
                >
                    {selectedColor}
                </span>
                .
            </p>
        </div>
    );
}
