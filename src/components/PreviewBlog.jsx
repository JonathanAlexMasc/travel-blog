import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//this is the main blog component
import axios from 'axios';

function getUrl(obj) {
    //console.log("myObj", obj.attributes.cover.data.attributes.url);
    console.log("inspecing obj...", obj);
    return obj.attributes.blogimg.data.attributes.url;
}

export default function PreviewBlog() {

    const [imgUrlArray, setImgUrlArray] = useState([""]);
    //console.log("imgIrljfboilbgsog", imgUrlArray);
    const [blogsArray, setBlogsArray] = useState([]);

    useEffect(() => {
        axios.get('https://tgtbackend.onrender.com/api/blogs?populate=*').then(res => {
            //console.log(res.data.data)
            let topLevelArray = res.data.data;
            let urlArr = [];
            urlArr = topLevelArray.map((eachObject) => {
                return getUrl(eachObject);
            })
            console.log("my image url array", topLevelArray);
            setImgUrlArray(urlArr);
        });
    }, [])

    useEffect(() => {
        axios.get('https://tgtbackend.onrender.com/api/blogs').then(res => {
            let topLevelArray = res.data;
            console.log("my blogs array", topLevelArray.data);
            setBlogsArray(topLevelArray.data);
        });
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