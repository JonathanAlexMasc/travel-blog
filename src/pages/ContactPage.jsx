import React from "react";
import { Container } from "react-bootstrap";
import moi from './moi.jpg';

export default function ContactPage() {

    return (
        <Container fluid className="d-flex flex-lg-row flex-column m-3 p-3 align-items-center">
            <Container fluid className="p-3">
                <img src={moi} alt="pic of me" style={{ width: "600px", height: "800px" }}></img>
            </Container>
            <Container fluid className="p-3 m-3 d-flex flex-column">
                <h3 className="m-3">Please enter your information in this form to reach out to me.</h3>

                <form name="contact v2" method="post" className="w-full m-3">
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                        <input name="bot-field" />
                    </div>
                    <p className="mb-3">
                        <label htmlFor="name">Name</label> <br />
                        <input className="form-control" type="text" id="name" name="name" required />
                    </p>
                    <p className="mb-3">
                        <label htmlFor="email">Email</label> <br />
                        <input className="form-control" type="email" id="email" name="email" required />
                    </p>
                    <p className="mb-3">
                        <label htmlFor="message">Message</label> <br />
                        <textarea className="form-control" id="message" name="message" required></textarea>
                    </p>
                    <p className="mb-3">
                        <input className="form-control" type="submit" value="Submit message" />
                    </p>
                </form>

            </Container>
        </Container>
    )
}