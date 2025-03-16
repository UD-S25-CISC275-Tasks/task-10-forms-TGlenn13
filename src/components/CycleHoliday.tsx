import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    enum Holiday {
        Christmas = "🎄",
        Halloween = "🎃",
        NewYear = "🎆",
        Easter = "🐣",
        FourthOfJuly = "🎇",
    }

    const alphabetOrder: Holiday[] = [
        Holiday.Christmas,
        Holiday.Easter,
        Holiday.FourthOfJuly,
        Holiday.Halloween,
        Holiday.NewYear,
    ];

    const yearOrder: Holiday[] = [
        Holiday.NewYear,
        Holiday.Easter,
        Holiday.FourthOfJuly,
        Holiday.Halloween,
        Holiday.Christmas,
    ];

    const [holiday, setHoliday] = useState<Holiday>(Holiday.NewYear);

    function nextAlphabetical() {
        const index = alphabetOrder.indexOf(holiday);
        const nextIndex = (index + 1) % alphabetOrder.length;
        setHoliday(alphabetOrder[nextIndex]);
    }

    function nextByYear() {
        const index = yearOrder.indexOf(holiday);
        const nextIndex = (index + 1) % yearOrder.length;
        setHoliday(yearOrder[nextIndex]);
    }

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button onClick={nextAlphabetical}>Advance by Alphabet</Button>
            <Button onClick={nextByYear}>Advance by Year</Button>
        </div>
    );
}
