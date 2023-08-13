import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import axios from 'axios';
import { getAllBlogs, getBlogWithWindowID, getImageWithID, getImageWithWindowID } from "../api/get-request-api";

export default function BlogPage() {
    const [blogContents, setBlogContents] = useState({});
    const [blogImg, setBlogImg] = useState({});

    // eslint-disable-next-line
    useEffect(() => {
        getBlogWithWindowID().then(res => {
            setBlogContents(res);
        })
        // eslint-disable-next-line
    }, []);

    // eslint-disable-next-line
    useEffect(() => {
        getImageWithWindowID().then(res => {
            setBlogImg(res);
        })
        // eslint-disable-next-line
    }, [])

    return (
        <Container className="d-flex flex-column justify-content-left">
            <Image src={blogImg} fluid className="mt-5 mb-4 img-responsive" />
            <h2>{blogContents.blogtitle}</h2>
            <h6><b>by {blogContents.blogauthor}</b></h6>
            <h6>{blogContents.blogdate}</h6>

            <p className="mt-4 mb-3">{blogContents.blogdesc}</p>

        </Container>
    )
}