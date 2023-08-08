import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import axios from 'axios';

export default function BlogPage() {
    const [blogContents, setBlogContents] = useState({});
    const [blogImg, setBlogImg] = useState({});

    const params = window.location.pathname;
    //console.log("my url params", params.substring(params.lastIndexOf('/') + 1));
    const currId = params.substring(params.lastIndexOf('/') + 1);

    async function getData() {
        const response = await axios({
            method: 'get',
            url: 'http://192.168.4.41:1337/api/blogs/' + currId,
        });

        const { data } = await response;
        setBlogContents(data.data.attributes);
    }

    async function getImage() {
        const response = await axios.get('http://192.168.4.41:1337/api/blogs?populate=*')
        const { data } = response;
        const cover = data.data[0].attributes.cover;
        const coverImg = cover.data.attributes.formats.large;
        // console.log('http://localhost:1337' + blogImg.url); - this is what I needed to load the //image
        setBlogImg(coverImg);
    }

    useEffect(() => {
        getData();
        getImage();
    }, []);

    return (
        <Container className="d-flex flex-column justify-content-left">
            <Image src={'http://192.168.4.41:1337' + blogImg.url} fluid className="mt-5 mb-4 img-responsive" />
            <h2>{blogContents.Title}</h2>
            <h6><b>by {blogContents.Author}</b></h6>
            <h6>{blogContents.publishedDate}</h6>

            <p className="mt-4 mb-3">{blogContents.Description}</p>

        </Container>
    )
}