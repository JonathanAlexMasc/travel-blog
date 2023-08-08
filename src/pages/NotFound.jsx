import { Container } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

export default function NotFound() {
    const error = useRouteError();
    console.error(error);
    return (
        <Container fluid className="d-flex flex-column align-items-center justify-content-center min-vh-100">
            <h1 className="m-3">Sorry, the link you are looking for does not exist.</h1>
            <p>404</p>
        </Container>
    )
}