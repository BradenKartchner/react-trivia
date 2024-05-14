/**
 * TODO: upon clicking either return to menu or try quiz again, reset the state of the
 * answers, etc. back to the default state
 * TODO (optional): make a modal that pops up when you click on a question that shows the question,
 * selected answer, right answer
 */

import { ScoreObject, initialQuizAnswers } from "../App";
import "./ScoreCard.css";
import { allQuizzes } from "../quiz_data";
import { WhichQuizObject } from "./QuizCard";

interface Props {
    submittedQuizAnswers: object;
    setSubmittedQuizAnswers: (
        value: object | ((prevState: object) => object)
    ) => void;
    currentQuiz: string;
    setCurrentCard: (value: string) => void;
    highScores: ScoreObject;
    setHighScores: (
        value: ScoreObject | ((prevValue: ScoreObject) => ScoreObject)
    ) => void;
}

function ScoreCard({
    submittedQuizAnswers,
    setSubmittedQuizAnswers,
    currentQuiz,
    setCurrentCard,
    highScores,
    setHighScores,
}: Props) {
    // get index of current quiz
    const lookUpQuiz: WhichQuizObject = {
        quiz1: 0,
        quiz2: 1,
        quiz3: 2,
        quiz4: 3,
        quiz5: 4,
    };
    const quizIndex = lookUpQuiz[currentQuiz as keyof WhichQuizObject];
    // make string to look up highScore
    const lookUpString: string = currentQuiz + "Score";
    const finalScore: number = Object.keys(submittedQuizAnswers).reduce(
        (prevValue, currKey) =>
            prevValue +
            (submittedQuizAnswers[currKey as keyof object] ==
            allQuizzes[quizIndex][Number(currKey)].correctAnswer
                ? 1
                : 0),
        0
    );
    //console.log("Final score: ", finalScore);

    const leftArrow = String.fromCodePoint(0x21e6);
    const rightArrow = String.fromCodePoint(0x21e8);

    /* Handle click functions */
    let handleMenuClick = function (): void {
        // set high score if score is higher than current high score
        if (finalScore > highScores[lookUpString as keyof object]) {
            setHighScores({ ...highScores, [lookUpString]: finalScore });
        }
        // reset answers object to default (clear answers)
        setSubmittedQuizAnswers(initialQuizAnswers);
        // set current card to menu
        setCurrentCard("menu");
    };

    let handleTryAgainClick = function (): void {
        // same as handleMenuClick, but set current card to quiz
        if (finalScore > highScores[lookUpString as keyof object]) {
            setHighScores({ ...highScores, [lookUpString]: finalScore });
        }
        setSubmittedQuizAnswers(initialQuizAnswers);
        setCurrentCard("quiz");
    };

    return (
        <>
            <div className="card" data-bs-theme="dark">
                <div className="card-body">
                    <h5 className="card-title">Final Score: {finalScore}/20</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {finalScore > highScores[lookUpString as keyof object]
                            ? "New High Score!"
                            : `High Score: ${
                                  highScores[lookUpString as keyof object]
                              }/20`}
                    </h6>
                    <p className="card-text results-display">
                        {Object.keys(submittedQuizAnswers).map(
                            (item, index) => (
                                <span
                                    className={`score-box ${
                                        submittedQuizAnswers[
                                            index as keyof object
                                        ] ==
                                        allQuizzes[quizIndex][index]
                                            .correctAnswer
                                            ? "true-box"
                                            : "false-box"
                                    }`}
                                    key={index}
                                >
                                    {index + 1}
                                </span>
                            )
                        )}
                    </p>
                    <p className="card-text">
                        <button
                            className="btn btn-secondary"
                            onClick={handleMenuClick}
                        >
                            {leftArrow} Return to menu
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={handleTryAgainClick}
                        >
                            Try same quiz again {rightArrow}
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
}

export default ScoreCard;
