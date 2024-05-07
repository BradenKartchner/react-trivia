/*
TODO: use .map to make the buttons for MenuCard
TODO: media queries for:
max height of the cards based on screen size
max width of the cards based on screen size
make the card width larger and the text larger for larger screens
make high scores on menu card wrap to column for smaller screens
reduce card class padding for mobile and smaller screens
fix button onHover to do something (see how bootstrap does it for its classes?)
 */

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuCard from "./components/MenuCard";

import "./App.css";

export interface ScoreObject {
    quiz1Score: number;
    quiz2Score: number;
    quiz3Score: number;
    quiz4Score: number;
    quiz5Score: number;
}

function App() {
    let initialScoreObject: ScoreObject = {
        quiz1Score: 15,
        quiz2Score: 6,
        quiz3Score: 7,
        quiz4Score: 8,
        quiz5Score: 9,
    };

    // state variables
    // for objects see: https://react.dev/learn/updating-objects-in-state
    const [highScores, setHighScores] =
        useState<ScoreObject>(initialScoreObject);
    return (
        <>
            <div className="bg-dark">
                <MenuCard highScores={highScores} />
            </div>
        </>
    );
}

export default App;
