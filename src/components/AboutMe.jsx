import React from "react";
import { Container } from "react-bootstrap";
import { Card, Image } from "react-bootstrap";
import ayothatsme from './ayothatsme.jpg';

//note - image dimensions are in pixels

export default function AboutMe() {
    return (
        <Container fluid className="d-flex flex-column align-items-center my-4">
            <Container fluid className="d-flex align-items-start bg-dark">
                <Container fluid className="bg-dark-subtle p-4 m-3">
                    <h4>Hello <i className="fa-regular fa-face-smile"></i> My name is Jonathan Mascarenhas, and I am the writer and developer of this blog. I'm originally from a small town in Goa called Curtorim, and a computer science major at the South Dakota School of Mines and Technology located in South Dakota, USA. <i className="fa-solid fa-flag-usa" style={{ color: "#0056d6" }}></i></h4>
                    <br /><br />

                    <h4>Feel free to contact me through any of the channels listed below - I'm open to new opportunities in software engineering/tech, and I'm also interested in building custom websites like this one for clients. <i className="fa-regular fa-face-laugh"></i></h4>
                    <br /><br /><br />

                    <div className="d-flex gap-3 m-5 align-items-center">
                        <i className="fa-brands fa-linkedin fa-2xl"></i>
                        <i className="fa-brands fa-instagram fa-2xl"></i>
                        <i className="fa-brands fa-twitter fa-2xl"></i>
                        <i className="fa-solid fa-envelope fa-2xl"></i>
                    </div>

                </Container>
            </Container>
            <Container fluid className="d-flex flex-column text-white text-center bg-secondary m-3 p-3 w-75" data-bs-theme="dark">
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