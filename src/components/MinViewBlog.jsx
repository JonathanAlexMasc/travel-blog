import React from "react";
import { Container, Image } from "react-bootstrap";
import sunsetImg from "./sunset-beach.jpg";
import { Link } from "react-router-dom";

export default function MinViewBlog() {
    return (
        <div>
            <Container className="d-flex flex-column flex-lg-row my-3 p-4 gap-5 ">
                <Container fluid>
                    <Image src={sunsetImg} fluid className="mr-4 img-responsive" style={{ width: "900px", height: "380px" }} />
                </Container>
                <Container fluid className="d-flex flex-column mr-5 gap-2 justify-content-evenly">
                    <div className="d-flex flex-row">
                        <h6 className=""><b>Aug 7, 2023</b></h6>
                        <h6 className="ms-auto">5 MIN READ</h6>
                    </div>
                    <Link to='/listblogs/blog'>
                        <h2>The Goan Experience - what it was like being born and brought up in Goa
                        </h2>
                    </Link>
                    <h6 className="">
                        The shades were closed keeping the room dark. Peter knew that he should open them and let in the sunlight so he could begin the day, but he didn't have the energy or willpower. Nothing had gone as expected the day before and he no longer wanted to spend the energy to begin a new day. He stared at the shades wondering if there was a way to disappear from the reality of the world for the rest of the day.
                    </h6>
                    <h6 className=""><b>by Jonathan Mascarenhas</b></h6>
                </Container>
            </Container>
        </div >
    )
}