import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import palm from './palm.jpg'
//this is the main blog component
import axios from 'axios';

function getUrl(obj) {
    return obj.attributes.highlight_image.data.attributes.url;
}

export default function PreviewBlog() {

    const [imgUrlArray, setImgUrlArray] = useState([""]);
    console.log("imgIrljfboilbgsog", imgUrlArray);

    useEffect(() => {
        axios.get('http://192.168.4.41:1337/api/images?populate=*').then(res => {
            console.log(res.data.data)
            let topLevelArray = res.data.data;
            let urlArr = [];
            topLevelArray.map((eachObject) => {
                urlArr.push(getUrl(eachObject));
            })
            console.log("my url array", urlArr);
            setImgUrlArray(urlArr);
        });
    }, [])

    return (
        <Container>
            <Container className="d-flex gap-2">
                <h1>Featured Posts</h1>
                <FontAwesomeIcon icon="fa-solid fa-star" />
            </Container>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className="h-100">
                            <Card.Img fluid variant="top" src={"http://192.168.4.41:1337" + imgUrlArray[idx]} className="h-100" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}