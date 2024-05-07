/**
 * TODO: add buttons to scroll back and forth between questions
 * TODO: add section to bottom of card with score and progress bar
 * TODO: add button to the top left(?) to return to quiz menu
 */

import "./QuizCard.css";

function QuizCard() {
    const leftArrow = String.fromCodePoint(0x21e6);
    const rightArrow = String.fromCodePoint(0x21e8);
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
                </div>
            </div>
        </>
    );
}

export default QuizCard;
