import React from "react";
import { Container } from "react-bootstrap";
import PreviewBlog from "../components/PreviewBlog";

export default function HomePage() {
    return (
        <Container fluid className="d-flex flex-column align-items-center bg-body-secondary">
            <PreviewBlog />
        </Container>
    )
}