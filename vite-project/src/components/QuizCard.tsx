/**
 * TODO: map over eventual array of questions answered to return progress bar segments
 * TODO: make previous question button not appear for question 1 and next not appear for q20
 * TODO: conditional rendering for either a span or an img depending on which quiz it is, also
 * create conditional classes for what type of span (quiz 1 span, text span for quiz 2, etc)
 * Quiz 1 and 3 can share classes, quiz 4 and 5 are img, quiz 2 is the only real text one
 * TODO: make the progress bar only 2 segments? green segment expands by 5% when you get question right,
 * vice versa for question wrong? or just keep as individual 20x segments?
 * TODO: make the question not shift over when the arrows disappear for questions 1 and 20. or use
 * css to make the button still visible but softer/blurred?
 * TODO: map over answer buttons to keep the code more dry?
 */

import "./QuizCard.css";
import { useState } from "react";
import { allQuizzes } from "../quiz_data";

interface Props {
    setCurrentCard: (value: string | ((prevState: string) => string)) => void;
    currentQuiz: string;
}

interface WhichQuizObject {
    quiz1: number;
    quiz2: number;
    quiz3: number;
    quiz4: number;
    quiz5: number;
}

function QuizCard({ setCurrentCard, currentQuiz }: Props) {
    const leftArrow = String.fromCodePoint(0x21e6);
    const rightArrow = String.fromCodePoint(0x21e8);
    const darkLeftArrow = String.fromCodePoint(0x2b05);
    const darkRightArrow = String.fromCodePoint(0x27a1);
    const sampleWidth = "15%";
    const lookUpQuiz: WhichQuizObject = {
        quiz1: 0,
        quiz2: 1,
        quiz3: 2,
        quiz4: 3,
        quiz5: 4,
    };
    const quizIndex = lookUpQuiz[currentQuiz as keyof WhichQuizObject];
    const quizInstructions: Array<string> = [
        "Match the element symbol to its name",
        "",
        "Match the molecular formula to its name",
        "Match the biological molecule to its name",
        "Match the amino acid to its name",
    ];

    /* state vars */
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [allAnswered, setAllAnswered] = useState<boolean>(false);

    // handle click functions
    let handleMenuClick = function (
        eve: React.MouseEvent<HTMLButtonElement>
    ): void {
        setCurrentCard("menu");
    };

    let handleLeftArrowClick = function (): void {
        if (currentQuestion > 0) {
            setCurrentQuestion((prevValue) => prevValue - 1);
        }
    };

    let handleRightArrowClick = function (): void {
        if (currentQuestion < 19) {
            setCurrentQuestion((prevValue) => prevValue + 1);
        }
    };

    return (
        <>
            <div className="card quiz-card" data-bs-theme="dark">
                <div className="card-body">
                    <h5 className="card-title">
                        Question {currentQuestion + 1}/20
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {quizInstructions[quizIndex]}
                    </h6>
                    <p className="card-text no-margin">
                        <button
                            className={`btn change-question ${
                                currentQuestion == 0 && "transparent"
                            }`}
                            onClick={handleLeftArrowClick}
                        >
                            {leftArrow}
                        </button>
                        <span className="question-span">
                            {allQuizzes[quizIndex][currentQuestion].question}
                        </span>
                        <button
                            className={`btn change-question ${
                                currentQuestion == 19 && "transparent"
                            }`}
                            onClick={handleRightArrowClick}
                        >
                            {rightArrow}
                        </button>
                    </p>
                    <p className="card-text answer-buttons">
                        {allQuizzes[quizIndex][currentQuestion].answers.map(
                            (item, index) => (
                                <button
                                    className="btn btn-secondary quiz-answer"
                                    key={`currentQuiz ${index}`}
                                >
                                    {item}
                                </button>
                            )
                        )}
                    </p>
                    <p className="card-text score-container">Score: 0/20</p>
                    <div className="progress-stacked my-progress">
                        <div
                            className="progress"
                            role="progressbar"
                            aria-label="Segment one"
                            aria-valuenow={15}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: sampleWidth }}
                        >
                            <div
                                className="progress-bar bg-success"
                                style={{ height: "1rem" }}
                            ></div>
                        </div>
                        <div
                            className="progress"
                            role="progressbar"
                            aria-label="Segment two"
                            aria-valuenow={15}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: sampleWidth }}
                        >
                            <div
                                className="progress-bar bg-danger"
                                style={{ height: "1rem" }}
                            ></div>
                        </div>
                    </div>
                    <p className="card-text exit-button-container">
                        <button
                            className="btn btn-secondary"
                            onClick={handleMenuClick}
                        >
                            Return to main menu
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
}

export default QuizCard;

/** Don't delete! Save for conditional rendering of img vs span for the question
 *                      <img
                            src="./quiz1images/question1.png"
                            className="card-img-top quiz-photo"
                            alt="Quiz 1 picture of element symbol"
                            id="quizImage"
                        ></img>
 */
