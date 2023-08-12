import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';

async function getImage(id) {
    const response = await axios.get(`https://tgtbackend.onrender.com/api/blogs/${id}?populate=*`);
    const { data } = response;

    const cover = data.data.attributes.blogimg;
    console.log("inspecing cover...", cover);
    const coverURL = cover.data.attributes.url;
    //const coverImg = cover.data.attributes.formats.large;
    // console.log('http://localhost:1337' + blogImg.url); - this is what I needed to load the //imageverImg
    console.log(coverURL);
    return coverURL;
}

export default function MinViewBlog({ id, title, author, date, preview }) {
    const [blogImg, setBlogImg] = useState("");

    useEffect(() => {
        getImage(id).then(res => { setBlogImg(res) });
    }, [id])

    return (
        <div>
            <Container className="d-flex flex-column flex-lg-row my-3 p-4 gap-5 ">
                <Container fluid>
                    <Image src={blogImg} fluid className="mr-4 img-responsive" style={{ width: "900px", height: "380px" }} />
                </Container>
                <Container fluid className="d-flex flex-column mr-5 gap-2 justify-content-evenly">
                    <div className="d-flex flex-row">
                        <h6 className=""><b>{date}</b></h6>
                        <h6 className="ms-auto">5 MIN READ</h6>
                    </div>
                    <Link to={'/listblogs/blog/' + id}>
                        <h2>{title}</h2>
                    </Link>
                    <h6 className="">
                        {preview}
                    </h6>
                    <h6 className=""><b>by {author}</b></h6>
                </Container>
            </Container>
        </div >
    )
}