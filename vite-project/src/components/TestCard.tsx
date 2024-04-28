import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// use bootstrap instead of reactstrap?
// relationship between bootstrap and vanilla css?
// bootstrap vs tailwind vs vanilla css?

function TestCard() {
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

export default TestCard;
