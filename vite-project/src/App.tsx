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
// import { allQuizzes } from "./quiz_data";

import "./App.css";

export interface ScoreObject {
    quiz1Score: number;
    quiz2Score: number;
    quiz3Score: number;
    quiz4Score: number;
    quiz5Score: number;
}

export const initialQuizAnswers = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
};

function App() {
    let initialHighScoreObject: ScoreObject = {
        quiz1Score: 0,
        quiz2Score: 0,
        quiz3Score: 0,
        quiz4Score: 0,
        quiz5Score: 0,
    };

    /* state variables */
    // "menu", "quiz", "results"
    const [currentCard, setCurrentCard] = useState<string>("menu");
    // quiz1, quiz2, quiz3, quiz4, quiz5
    const [currentQuiz, setCurrentQuiz] = useState<string>("");
    // answers to the current quiz
    const [submittedQuizAnswers, setSubmittedQuizAnswers] =
        useState<object>(initialQuizAnswers);
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
                        submittedQuizAnswers={submittedQuizAnswers}
                        setSubmittedQuizAnswers={setSubmittedQuizAnswers}
                    />
                )}
                {currentCard == "results" && (
                    <ScoreCard
                        submittedQuizAnswers={submittedQuizAnswers}
                        setSubmittedQuizAnswers={setSubmittedQuizAnswers}
                        currentQuiz={currentQuiz}
                        setCurrentCard={setCurrentCard}
                        highScores={highScores}
                        setHighScores={setHighScores}
                    />
                )}
            </div>
        </>
    );
}

export default App;
