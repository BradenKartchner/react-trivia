/**
 * TODO: add button to the top left(?) to return to quiz menu
 * TODO: map over eventual array of questions answered to return progress bar segments
 */

import "./QuizCard.css";

function QuizCard() {
    const leftArrow = String.fromCodePoint(0x21e6);
    const rightArrow = String.fromCodePoint(0x21e8);
    const sampleWidth = "15%";
    return (
        <>
            <div className="card" data-bs-theme="dark">
                <div className="card-body">
                    <h5 className="card-title">Question 1/20</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        Match the element symbol to name
                    </h6>
                    <p className="card-text no-margin">
                        <button className="btn change-question">
                            {leftArrow}
                        </button>
                        <img
                            src="./quiz1images/question1.png"
                            className="card-img-top quiz-photo"
                            alt="Quiz 1 picture of element symbol"
                            id="quizImage"
                        ></img>
                        <button className="btn change-question">
                            {rightArrow}
                        </button>
                    </p>
                    <p className="card-text answer-buttons">
                        <button className="btn btn-secondary quiz-answer">
                            Answer 1
                        </button>
                        <button className="btn btn-secondary quiz-answer">
                            Answer 2
                        </button>
                        <button className="btn btn-secondary quiz-answer">
                            Answer 3
                        </button>
                        <button className="btn btn-secondary quiz-answer">
                            Answer 4
                        </button>
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
                                className="progress-bar"
                                style={{ height: "1rem" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuizCard;
