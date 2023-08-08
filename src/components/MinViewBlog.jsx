import React from "react";
import { Container, Image } from "react-bootstrap";
import sunsetImg from "./sunset-beach.jpg";
import { Link } from "react-router-dom";

export default function MinViewBlog({ id, title, description, author, date }) {
    return (
        <div>
            <Container className="d-flex flex-column flex-lg-row my-3 p-4 gap-5 ">
                <Container fluid>
                    <Image src={sunsetImg} fluid className="mr-4 img-responsive" style={{ width: "900px", height: "380px" }} />
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
                        {description}
                    </h6>
                    <h6 className=""><b>by {author}</b></h6>
                </Container>
            </Container>
        </div >
    )
}