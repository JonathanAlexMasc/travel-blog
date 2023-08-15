import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { getBlogWithWindowID, getImageWithWindowID } from "../api/get-request-api";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

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
            <h6 className="mb-3">{blogContents.blogdate}</h6>

            <ReactMarkdown>
                {blogContents.blogdesc}
            </ReactMarkdown>

        </Container>
    )
}