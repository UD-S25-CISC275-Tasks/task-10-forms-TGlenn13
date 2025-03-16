import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={isEditMode}
                onChange={() => {
                    setIsEditMode(!isEditMode);
                }}
            />
            {isEditMode ?
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => {
                                setIsStudent(!isStudent);
                            }}
                        />
                        Student
                    </label>
                </div>
            :   <p>
                    {name} is {isStudent ? "a student" : "not a student"}.
                </p>
            }
        </div>
    );
}
