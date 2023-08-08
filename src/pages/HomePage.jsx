import React from "react";
import { Container } from "react-bootstrap";
import Blog from "../components/PreviewBlog";

export default function HomePage() {
    return (
        <Container className="d-flex m-4">
            <Blog />
        </Container>
    )
}