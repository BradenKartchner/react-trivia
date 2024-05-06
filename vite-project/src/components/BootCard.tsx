// use bootstrap or reactstrap? maybe just try bootstrap first
// see this link: https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-grid-system.php
// and scroll down a bit to see how to structure a website to work on multiple different size screens

import "./BootCard.css";

function BootCard() {
    return (
        <>
            <div className="card" data-bs-theme="dark">
                <div className="card-body">
                    <h5 className="card-title">Card title here</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        card subtitle here
                    </h6>
                    <p className="card-text">
                        The main text of the card can go here... Does the text
                        begin to wrap as we get closer to 22rem of width? Yes it
                        does!!
                    </p>
                    <p className="card-text">
                        <button type="button" className="btn btn-primary">
                            Primary
                        </button>
                        <button type="button" className="btn btn-secondary">
                            Secondary
                        </button>
                        <button type="button" className="btn btn-success">
                            Success
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                        >
                            Danger
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
}

export default BootCard;
