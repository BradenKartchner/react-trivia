/**
 * TODO: make a difficulty column that doesn't appear on smaller screens?
 */

import "./MenuCard.css";
import { ScoreObject } from "../App";
import { Fragment } from "react/jsx-runtime";

interface Props {
    highScores: ScoreObject;
}

function MenuCard({ highScores }: Props) {
    const smileEmoji = String.fromCodePoint(0x1f92a);
    const quizNames: string[] = [
        "Element name",
        "Element trivia",
        "Molecular formulae",
        "Biological molecules",
        "Amino acid names",
    ];

    return (
        <>
            <div className="card" data-bs-theme="dark">
                <div className="card-body">
                    <h5 className="card-title">Chemistry Quizzes</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        because life wasn't already hard enough {smileEmoji}
                    </h6>
                    <p
                        className="card-text menu-buttons"
                        style={{ marginTop: "3rem" }}
                    >
                        <span className="label-span">Quizzes!</span>
                        <span className="label-span">High Scores:</span>
                        {Object.keys(highScores).map((item, index) => {
                            return (
                                <Fragment key={`${item}${index}`}>
                                    <button
                                        type="button"
                                        className={`btn btn-${
                                            index + 1
                                        } quiz-name`}
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
