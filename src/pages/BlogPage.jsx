import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { getBlogWithWindowID, getImageWithWindowID } from "../api/get-request-api";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function BlogPage() {
    const [blogContents, setBlogContents] = useState({});
    const [blogImg, setBlogImg] = useState({});
    const [blog_img_1, set_blog_img_1] = useState({});
    const [blog_img_2, set_blog_img_2] = useState({});
    const [blog_img_3, set_blog_img_3] = useState({});
    // eslint-disable-next-line
    useEffect(() => {
        getBlogWithWindowID().then(res => {
            setBlogContents(res);
        })
        // eslint-disable-next-line
    }, []);

    //this function gets the main image for the blog
    // eslint-disable-next-line
    useEffect(() => {
        getImageWithWindowID(1).then(res => {
            setBlogImg(res);
        })
        // eslint-disable-next-line
    }, [])

    // eslint-disable-next-line
    useEffect(() => {
        getImageWithWindowID(2).then(res => {
            set_blog_img_1(res);
        })
        // eslint-disable-next-line
    }, [])

    // eslint-disable-next-line
    useEffect(() => {
        getImageWithWindowID(3).then(res => {
            set_blog_img_2(res);
        })
        // eslint-disable-next-line
    }, [])

    // eslint-disable-next-line
    useEffect(() => {
        getImageWithWindowID(4).then(res => {
            set_blog_img_3(res);
        })
        // eslint-disable-next-line
    }, [])

    return (
        <Container className="d-flex flex-column justify-content-left">
            <Image src={blogImg} fluid className="mt-5 mb-4 img-responsive" />
            <h1 className="my-3"><b>{blogContents.blogtitle}</b></h1>
            <div className="d-inline-flex flex-row">
                <h5 className="">{blogContents.blogdate}</h5>
                <h5 className="ms-auto">{blogContents.blogauthor}</h5>
            </div>

            <ReactMarkdown>
                {blogContents.blog_intro}
            </ReactMarkdown>

            <ReactMarkdown>
                {blogContents.blog_sub_1}
            </ReactMarkdown>

            <Image src={blog_img_1} fluid className="mt-5 mb-4 img-responsive" />

            <ReactMarkdown>
                {blogContents.blog_sub_2}
            </ReactMarkdown>

            <Image src={blog_img_2} fluid className="mt-5 mb-4 img-responsive" />

            <ReactMarkdown>
                {blogContents.blog_sub_3}
            </ReactMarkdown>

            <Image src={blog_img_3} fluid className="mt-5 mb-4 img-responsive" />

            <ReactMarkdown>
                {blogContents.blog_sub_4}
            </ReactMarkdown>

        </Container>
    )
}