// Basic example of a Card using ReactStrap library
// I don't like how inflexible this is, I will use regular Bootstrap instead

import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function StrapCard() {
    return (
        <>
            <Card body color="secondary" inverse style={{ width: "18rem" }}>
                <CardTitle>Title here</CardTitle>
                <CardSubtitle className="mb-2 text-muted">
                    Subtitle here
                </CardSubtitle>
                <CardBody>body here</CardBody>
            </Card>
        </>
    );
}

export default StrapCard;
