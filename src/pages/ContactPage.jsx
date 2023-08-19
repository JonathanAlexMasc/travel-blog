import React from "react";
import { Container } from "react-bootstrap";
import moi from './moi.jpg';
import Form from 'react-bootstrap/Form';

export default function ContactPage() {
    return (
        <Container fluid className="d-flex flex-lg-row m-3 p-3">
            <Container fluid className="p-3">
                <img src={moi} alt="pic of me" style={{ width: "600px", height: "800px" }}></img>
            </Container>
            <Container fluid className="p-3 m-3 d-flex flex-column">
                <h3 className="m-3">Please enter your information in this form to reach out to me.</h3>
                <Form className="m-3" netlify>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="John Seed" />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>More about you</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Select Contact Type</option>
                            <option value="1">Recruiter</option>
                            <option value="2">Potential Client</option>
                            <option value="3">Looking for consultation/mentoring</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={9} />
                    </Form.Group>
                </Form>
            </Container>
        </Container>
    )
}