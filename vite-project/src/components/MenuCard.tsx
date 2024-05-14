/**
 * TODO: make a difficulty column that doesn't appear on smaller screens?
 */

import "./MenuCard.css";
import { ScoreObject } from "../App";
import { Fragment } from "react/jsx-runtime";

interface Props {
    highScores: ScoreObject;
    setCurrentCard: (value: string | ((prevState: string) => string)) => void;
    setCurrentQuiz: (value: string | ((prevState: string) => string)) => void;
}

function MenuCard({ highScores, setCurrentCard, setCurrentQuiz }: Props) {
    const smileEmoji = String.fromCodePoint(0x1f92a);
    const coolEmoji = String.fromCodePoint(0x1f60e);
    const partyEmoji = String.fromCodePoint(0x1f973);
    const hmmEmoji = String.fromCodePoint(0x1f9d0);
    const scaredEmoji = String.fromCodePoint(0x1f628);
    const mindBlownEmoji = String.fromCodePoint(0x1f92f);
    const quizNames: string[] = [
        "Element name",
        "Element trivia",
        "Molecular formulae",
        "Biological molecules",
        "Amino acid names",
    ];
    const emojiArray = [
        coolEmoji,
        partyEmoji,
        hmmEmoji,
        scaredEmoji,
        mindBlownEmoji,
    ];
    const difficultyArray = [
        {
            backgroundColor: "rgb(13, 110, 253)",
        },
        {
            backgroundColor: "rgb(25, 135, 83)",
        },
        {
            backgroundColor: "rgb(255, 193, 7)",
        },
        {
            backgroundColor: "rgb(253, 126, 20)",
        },
        {
            backgroundColor: "rgb(220, 52, 68)",
        },
    ];
    const quizIDs = ["quiz1", "quiz2", "quiz3", "quiz4", "quiz5"];

    let handleClick = function (
        eve: React.MouseEvent<HTMLButtonElement>
    ): void {
        console.log(eve);
        // 1: setCurrentQuiz to the correct quiz number
        const myTarget = eve.target as HTMLButtonElement; // screw TS
        setCurrentQuiz(myTarget.id);
        // 2: setCurrentCard to "quiz" (and in App pass the current quiz name as props to QuizCard)
        setCurrentCard("quiz");
    };

    return (
        <>
            <div className="card menu-card" data-bs-theme="dark">
                <div className="card-body">
                    <h5 className="card-title">Chemistry Quizzes</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        because life wasn't already hard enough {smileEmoji}
                    </h6>
                    <p
                        className="card-text menu-buttons"
                        style={{ marginTop: "3rem" }}
                    >
                        <span className="label-span"></span>
                        <span className="label-span">Quizzes!</span>
                        <span className="label-span high-score-txt">
                            High Scores:
                        </span>
                        {Object.keys(highScores).map((item, index) => {
                            return (
                                <Fragment key={`${item}${index}`}>
                                    <span
                                        className="difficulty"
                                        style={difficultyArray[index]}
                                    >
                                        {emojiArray[index]}
                                    </span>
                                    <button
                                        type="button"
                                        className={`btn btn-${
                                            index + 1
                                        } quiz-name`}
                                        onClick={handleClick}
                                        id={quizIDs[index]}
                                    >
                                        {quizNames[index]}
                                    </button>
                                    <span className="high-score">
                                        {highScores[item as keyof ScoreObject]}
                                        /20
                                    </span>
                                </Fragment>
                            );
                        })}
                    </p>
                    <p
                        className="card-text mb-2 text-muted"
                        style={{ marginTop: "3rem" }}
                    >
                        {"\u00A9"}2024 Braden Kartchner
                        <br></br>
                        <a
                            target="_blank"
                            href="https://github.com/BradenKartchner"
                        >
                            https://github.com/BradenKartchner
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default MenuCard;

/*
                        <button type="button" className="btn btn-1 quiz-name">
                            Button 1
                        </button>
                        <span className="high-score">
                            High Score:
                            <br />
                            {highScores.quiz1Score}/20
                        </span>
                        <button type="button" className="btn btn-2 quiz-name">
                            Button 2
                        </button>
                        <span className="high-score">
                            High Score:
                            <br />
                            {highScores.quiz2Score}/20
                        </span>
                        <button type="button" className="btn btn-3 quiz-name">
                            Button 3
                        </button>
                        <span className="high-score">
                            High Score:
                            <br />
                            {highScores.quiz3Score}/20
                        </span>
                        <button type="button" className="btn btn-4 quiz-name">
                            Button 4
                        </button>
                        <span className="high-score">
                            High Score:
                            <br />
                            {highScores.quiz4Score}/20
                        </span>
                        <button type="button" className="btn btn-5 quiz-name">
                            Button 5
                        </button>
                        <span className="high-score">
                            High Score:
                            <br />
                            {highScores.quiz5Score}/20
                        </span>
*/
