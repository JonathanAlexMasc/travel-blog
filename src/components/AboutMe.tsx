import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import jpn from './img-japan.jpg'
import palm from './palm.jpg'

//note - image dimensions are in pixels

export default function AboutMe() {
    return (
        <Container fluid className="d-flex flex-column flex-lg-row gap-4 justify-content-evenly">
            <Container fluid className="d-flex flex-column text-white text-center bg-secondary m-4 p-4 w-75" data-bs-theme="dark">
                <p className="m-3 font-monospace">
                    Welcome to my blog.
                </p>
                <p className="text-wrap mt-3">
                    My goal for now is to document my journey through different countries and document
                    my interactions with people from around the world. Currently, I'm a software engineering
                    intern at an educational software company in Florida. I'm also a computer science major
                    at a small, midwestern engineering focused school.
                </p>
                <p className="text-wrap mt-5 mb-5">
                    I'm originally from a small town in Goa called Curtorim. I've had some great memories growing
                    up in Goa, but decided that it was time for a change and moved to the United States when I was
                    19. My main motivation to travel is too see places that I've never seen and exprience unfamiliar
                    food and cultures.
                </p>
                <p className="text-wrap">
                    We are all the same, and living in a different country has only reinforced that belief. I hope you are
                    able to enjoy some of the content from this blog, which is a documentation of my journey thorough life,
                    cultures, expriences, and good memories.
                </p>
            </Container>
        </Container >
    )
}