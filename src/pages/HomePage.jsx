import React from "react";
import { Container } from "react-bootstrap";
import PreviewBlog from "../components/PreviewBlog";

export default function HomePage() {
    return (
        <Container className="d-flex flex-column align-content-center mt-4 mb-4">
            <PreviewBlog />
        </Container>
    )
}