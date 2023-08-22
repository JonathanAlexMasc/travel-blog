import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//this is the main blog component
import { getAllImages, getAllBlogs } from "../api/get-request-api";

export default function PreviewBlog() {

    const [imgUrlArray, setImgUrlArray] = useState([]);
    //console.log("imgIrljfboilbgsog", imgUrlArray);
    const [blogsArray, setBlogsArray] = useState([]);

    useEffect(() => {
        getAllImages().then(res => {
            //console.log('response', res);
            setImgUrlArray(res);
        })

        getAllBlogs().then(res => {
            //console.log("resulting", res);
            setBlogsArray(res);
        })

    }, [])

    return (
        <Container className="m-3">
            <Container className="d-inline-flex mb-3 align-items-evenly">
                <div>
                    <h1>Featured Posts <i className="fa-solid fa-star center mx-1" style={{ color: "#ffd877", }}></i></h1>
                </div>
            </Container>
            <Row xs={1} md={2} className="g-4">
                {blogsArray.map((singleBlog, idx) => (
                    <Col key={singleBlog.id}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={imgUrlArray[idx]} className="h-100" />
                            <Card.Body>
                                <Link to={`/listblogs/blog/${singleBlog.id}`}><Card.Title>{singleBlog.attributes.blogtitle}</Card.Title></Link>
                                <Card.Text>
                                    {singleBlog.attributes.blogpreview}
                                </Card.Text>
                                <Card.Text>
                                    {singleBlog.attributes.id}
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}