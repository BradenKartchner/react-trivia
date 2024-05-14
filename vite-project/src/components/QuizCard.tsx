/**
 * TODO: conditional rendering for either a span or an img depending on which quiz it is, also
 * create conditional classes for what type of span (quiz 1 span, text span for quiz 2, etc)
 * Quiz 1 and 3 can share classes, quiz 4 and 5 are img, quiz 2 is the only real text one
 * TODO: make return to menu button reset state for all of the answer objects, etc?? or
 * just try and handle that all through state?
 * TODO: if numAnswered >= 20, show results page
 */

import "./QuizCard.css";
import { useState } from "react";
import { allQuizzes } from "../quiz_data";
import { initialQuizAnswers } from "../App";

interface Props {
    setCurrentCard: (value: string | ((prevState: string) => string)) => void;
    currentQuiz: string;
    submittedQuizAnswers: object;
    setSubmittedQuizAnswers: (
        value: object | ((prevState: object) => object)
    ) => void;
}

export interface WhichQuizObject {
    quiz1: number;
    quiz2: number;
    quiz3: number;
    quiz4: number;
    quiz5: number;
}

function QuizCard({
    setCurrentCard,
    currentQuiz,
    submittedQuizAnswers,
    setSubmittedQuizAnswers,
}: Props) {
    const leftArrow = String.fromCodePoint(0x21e6);
    const rightArrow = String.fromCodePoint(0x21e8);
    const percentWidth = "5%";
    const progressWidth = 5;
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
    const initialIsAnswered = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
        17: false,
        18: false,
        19: false,
    };

    /* state vars */
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    // for tracking if each question has been answered or not
    const [isAnswered, setIsAnswered] = useState<object>(initialIsAnswered);
    // for changing state to results when all questions are answered
    const [numAnswered, setNumAnswered] = useState<number>(0);
    // for tracking current score
    const [currScore, setCurrScore] = useState<number>(0);

    // handle click functions
    let handleMenuClick = function (): void {
        // reset answers to blank
        setSubmittedQuizAnswers(initialQuizAnswers);
        setCurrentCard("menu");
        //console.log(submittedQuizAnswers);
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

    let handleAnswerClick = function (
        eve: React.MouseEvent<HTMLButtonElement>
    ): void {
        const myTarget = eve.target as HTMLButtonElement;
        // only do if question isn't already answered
        if (isAnswered[currentQuestion as keyof object]) {
            // do nothing
        } else {
            // 1. store user answer in submittedQuizAnswers object
            setSubmittedQuizAnswers({
                ...submittedQuizAnswers,
                [currentQuestion]: myTarget.innerText,
            });
            // 2. increment numAnswered by 1
            setNumAnswered((prev) => prev + 1);
            // 2.5: change isAnswered to true for the correct question number
            setIsAnswered({
                ...isAnswered,
                [currentQuestion]: true,
            });
            // 3. if answer is correct, increment quiz score by 1
            if (
                myTarget.innerHTML ==
                allQuizzes[quizIndex][currentQuestion].correctAnswer
            ) {
                setCurrScore((prev) => prev + 1);
            }
            // >= 19 because re-render hasn't happened yet, so numAnswered isn't updated to 20
            if (numAnswered >= 19) {
                setCurrentCard("results");
            }
            // 4. change style of correct answer button to green (done)
            // 5. if answer is wrong, change submitted answer button to red (done)
            // 6. update progress bar (done)
            // 7. After handling all of this, display results card if
            // numAnswered >= 20 (how to handle not updating before rerender?)
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
                        {currentQuiz == "quiz1" && (
                            <span className="question-span">
                                {
                                    allQuizzes[quizIndex][currentQuestion]
                                        .question
                                }
                            </span>
                        )}
                        {currentQuiz == "quiz2" && (
                            <span className="quiz2-span">
                                {
                                    allQuizzes[quizIndex][currentQuestion]
                                        .question
                                }
                            </span>
                        )}
                        {(currentQuiz == "quiz3" ||
                            currentQuiz == "quiz4" ||
                            currentQuiz == "quiz5") && (
                            <img
                                src={
                                    allQuizzes[quizIndex][currentQuestion]
                                        .imgSrc
                                }
                                className="quiz-photo"
                                alt="picture of quiz question"
                                id="quizImage"
                            ></img>
                        )}
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
                                    className={`btn quiz-answer btn-${
                                        isAnswered[
                                            currentQuestion as keyof object
                                        ] &&
                                        allQuizzes[quizIndex][currentQuestion]
                                            .answers[index] ==
                                            allQuizzes[quizIndex][
                                                currentQuestion
                                            ].correctAnswer
                                            ? "success"
                                            : allQuizzes[quizIndex][
                                                  currentQuestion
                                              ].answers[index] !=
                                                  allQuizzes[quizIndex][
                                                      currentQuestion
                                                  ].correctAnswer &&
                                              allQuizzes[quizIndex][
                                                  currentQuestion
                                              ].answers[index] ==
                                                  submittedQuizAnswers[
                                                      currentQuestion as keyof object
                                                  ]
                                            ? "danger"
                                            : "secondary"
                                    }`}
                                    key={`currentQuiz ${index}`}
                                    onClick={handleAnswerClick}
                                >
                                    {item}
                                </button>
                            )
                        )}
                    </p>
                    <p className="card-text score-container">
                        Score: {currScore}/20
                    </p>
                    <div className="progress-stacked my-progress">
                        {Object.keys(isAnswered).map((item, index) => {
                            return (
                                <div
                                    className="progress"
                                    role="progressbar"
                                    aria-label={`Segment ${index + 1}`}
                                    aria-valuenow={progressWidth}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: percentWidth }}
                                    key={`${item} ${index}`}
                                >
                                    <div
                                        className={`progress-bar bg-${
                                            isAnswered[item as keyof object] &&
                                            submittedQuizAnswers[
                                                index as keyof object
                                            ] ==
                                                allQuizzes[quizIndex][index]
                                                    .correctAnswer
                                                ? "success"
                                                : isAnswered[
                                                      item as keyof object
                                                  ]
                                                ? "danger"
                                                : "my-own-custom"
                                        }`}
                                        style={{ height: "1rem" }}
                                    ></div>
                                </div>
                            );
                        })}
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
