import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import { getImageWithID } from "../api/get-request-api";
import { useState, useEffect } from "react";

export default function MinViewBlog({ id, title, author, date, preview }) {
    const [blogImg, setBlogImg] = useState("");

    useEffect(() => {
        getImageWithID(id).then(res => { setBlogImg(res) });
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