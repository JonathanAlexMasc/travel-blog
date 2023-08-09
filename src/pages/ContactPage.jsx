import React from "react"
import { Container, Image, Card } from "react-bootstrap"
import ayothatsme from './ayothatsme.jpg';

export default function ContactPage() {

    return (
        <Container className="d-flex m-4 p-2">
            <Container className="d-flex flex-column w-25">
                <Image src={ayothatsme} className="img-fluid h-auto" />
                <p className="bg-dark-subtle p-4">
                    <h4>Hello <i class="fa-regular fa-face-smile"></i> My name is Jonathan Mascarenhas, and I am the writer and developer of this blog. I'm currently looking for software engineering related internships for the summer of 2024! <i class="fa-regular fa-handshake"></i> </h4>
                </p>
            </Container>
            <Container className="d-flex flex-column gap-3 w-50 p-3 bg-dark-subtle align-items-center">
                <h5 className="my-3">Please feel free to contact me on <a href="https://www.linkedin.com/in/jonathanmascarenhas/">LinkedIn</a> <i class="fa-brands fa-linkedin"></i> </h5>
                <h5>
                    I worked at Blackboard during the summer of 2023 as a software engineering intern on the Learn Ultra product development team. I've listed some of my experience at Blackboard below.
                </h5>
                <ul>
                    <h5><li>Uno</li></h5>
                    <h5><li>Uno</li></h5>
                    <h5><li>Uno</li></h5>
                </ul>
            </Container>
        </Container>
    )
}