/*
TODO: make end card to display quiz results
TODO: media queries for:
max height of the cards based on screen size
max width of the cards based on screen size
make the card width larger and the text larger for larger screens
make high scores on menu card wrap to column for smaller screens
reduce card class padding for mobile and smaller screens
fix button onHover to do something (see how bootstrap does it for its classes?)
TODO (optional): add a modal to QuizCard that asks if you are sure if you want to return to main menu
TODO (optional): add animations to transitions between menu, quiz, and results
 */

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuCard from "./components/MenuCard";
import QuizCard from "./components/QuizCard";
import ScoreCard from "./components/ScoreCard";
import { allQuizzes } from "./quiz_data";

import "./App.css";

export interface ScoreObject {
    quiz1Score: number;
    quiz2Score: number;
    quiz3Score: number;
    quiz4Score: number;
    quiz5Score: number;
}

function App() {
    let initialHighScoreObject: ScoreObject = {
        quiz1Score: 15,
        quiz2Score: 6,
        quiz3Score: 7,
        quiz4Score: 8,
        quiz5Score: 9,
    };

    let initialQuizScores = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];

    /* state variables */
    // "menu", "quiz", "results"
    const [currentCard, setCurrentCard] = useState<string>("menu");
    // quiz1, quiz2, quiz3, quiz4, quiz5
    const [currentQuiz, setCurrentQuiz] = useState<string>("");
    // scores of individual questions of current quiz
    const [currentQuizScores, setCurrentQuizScores] =
        useState<Array<number>>(initialQuizScores);
    // for objects as state see: https://react.dev/learn/updating-objects-in-state
    const [highScores, setHighScores] = useState<ScoreObject>(
        initialHighScoreObject
    );
    return (
        <>
            <div className="bg-dark">
                {currentCard == "menu" && (
                    <MenuCard
                        highScores={highScores}
                        setCurrentCard={setCurrentCard}
                        setCurrentQuiz={setCurrentQuiz}
                    />
                )}
                {currentCard == "quiz" && (
                    <QuizCard
                        setCurrentCard={setCurrentCard}
                        currentQuiz={currentQuiz}
                    />
                )}
                {currentCard == "results" && <ScoreCard />}
            </div>
        </>
    );
}

export default App;
