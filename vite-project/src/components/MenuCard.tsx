import "./MenuCard.css";
import { ScoreObject } from "../App";

interface Props {
    highScores: ScoreObject;
}

function MenuCard({ highScores }: Props) {
    const smileEmoji = String.fromCodePoint(0x1f92a);

    return (
        <>
            <div className="card" data-bs-theme="dark">
                <div className="card-body">
                    <h5 className="card-title">Chemistry Quizzes</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        because life wasn't already hard enough {smileEmoji}
                    </h6>
                    <p className="card-text" style={{ marginTop: "3rem" }}>
                        <button type="button" className="btn btn-1 quiz-name">
                            Button 1
                        </button>
                        <span className="high-score">
                            High Score: {highScores.quiz1Score}/20
                        </span>
                        <button type="button" className="btn btn-2 quiz-name">
                            Button 2
                        </button>
                        <span className="high-score">
                            High Score: {highScores.quiz2Score}/20
                        </span>
                        <button type="button" className="btn btn-3 quiz-name">
                            Button 3
                        </button>
                        <span className="high-score">
                            High Score: {highScores.quiz3Score}/20
                        </span>
                        <button type="button" className="btn btn-4 quiz-name">
                            Button 4
                        </button>
                        <span className="high-score">
                            High Score: {highScores.quiz4Score}/20
                        </span>
                        <button type="button" className="btn btn-5 quiz-name">
                            Button 5
                        </button>
                        <span className="high-score">
                            High Score: {highScores.quiz5Score}/20
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default MenuCard;
