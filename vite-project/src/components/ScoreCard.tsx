import "./ScoreCard.css";

function ScoreCard() {
    const sampleScores: number[] = [
        0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0,
    ];

    const leftArrow = String.fromCodePoint(0x21e6);
    const rightArrow = String.fromCodePoint(0x21e8);

    return (
        <>
            <div className="card" data-bs-theme="dark">
                <div className="card-body">
                    <h5 className="card-title">Final Score: 11/20</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        New High Score!
                    </h6>
                    <p className="card-text results-display">
                        {sampleScores.map((item, index) => (
                            <span
                                className={`score-box ${
                                    item == 1 ? "true-box" : "false-box"
                                }`}
                                key={index}
                            >
                                {index + 1}
                            </span>
                        ))}
                    </p>
                    <p className="card-text">
                        <button className="btn btn-secondary">
                            {leftArrow} Return to menu
                        </button>
                        <button className="btn btn-secondary">
                            Try same quiz again {rightArrow}
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
}

export default ScoreCard;
