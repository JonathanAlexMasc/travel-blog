import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//this is the main blog component
import axios from 'axios';

function getUrl(obj) {
    //console.log("myObj", obj.attributes.cover.data.attributes.url);
    return obj.attributes.cover.data.attributes.url;
}

export default function PreviewBlog() {

    const [imgUrlArray, setImgUrlArray] = useState([""]);
    //console.log("imgIrljfboilbgsog", imgUrlArray);
    const [blogsArray, setBlogsArray] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.4.41:1337/api/blogs?populate=*').then(res => {
            //console.log(res.data.data)
            let topLevelArray = res.data.data;
            let urlArr = [];
            topLevelArray.map((eachObject) => {
                urlArr.push(getUrl(eachObject));
            })
            console.log("my image url array", topLevelArray);
            setImgUrlArray(urlArr);
        });
    }, [])

    useEffect(() => {
        axios.get('http://192.168.4.41:1337/api/blogs').then(res => {
            //console.log(res.data.data)
            let topLevelArray = res.data.data;
            let blogsArr = [];
            topLevelArray.map((eachObject) => {
                blogsArr.push(eachObject.attributes);
            })
            console.log("my blogs array", blogsArr);
            setBlogsArray(blogsArr);
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
                    <Col key={idx}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={"http://192.168.4.41:1337" + imgUrlArray[idx]} className="h-100" />
                            <Card.Body>
                                <Link to={`/listblogs/blog/${idx + 1}`}><Card.Title>{singleBlog.Title}</Card.Title></Link>
                                <Card.Text>
                                    {singleBlog.preview}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}