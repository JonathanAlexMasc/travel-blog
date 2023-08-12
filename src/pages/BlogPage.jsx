import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import axios from 'axios';

export default function BlogPage() {
    const [blogContents, setBlogContents] = useState({});
    const [blogImg, setBlogImg] = useState({});

    const params = window.location.pathname;
    //console.log("my url params", params.substring(params.lastIndexOf('/') + 1));
    const currId = params.substring(params.lastIndexOf('/') + 1);
    console.log("current id", currId);

    async function getData() {
        const response = await axios({
            method: 'get',
            url: 'https://tgtbackend.onrender.com/api/blogs/' + currId,
        });

        const { data } = await response;
        setBlogContents(data.data.attributes);
    }

    async function getImage() {
        const response = await axios.get(`https://tgtbackend.onrender.com/api/blogs/${currId}?populate=*`)
        const { data } = response;
        const cover = data.data.attributes.blogimg;
        const imgUrl = cover.data.attributes.url;
        //const coverImg = cover.data.attributes.formats.large;
        // console.log('http://localhost:1337' + blogImg.url); - this is what I needed to load the //image
        console.log("image url", imgUrl)
        setBlogImg(imgUrl);
    }

    // eslint-disable-next-line
    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);
    // eslint-disable-next-line
    useEffect(() => {
        getImage();
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