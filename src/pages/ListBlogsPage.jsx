import React from "react";
import { Container, Image } from "react-bootstrap";
import sunsetImg from "./sunset-beach.jpg";
import { Link } from "react-router-dom";
import MinViewBlog from "../components/MinViewBlog";

export default function ListBlogsPage() {
    return (
        <div className="d-flex flex-column justify-content-start">
            <MinViewBlog />
            <MinViewBlog />
            <MinViewBlog />
            <MinViewBlog />
            <MinViewBlog />
            <MinViewBlog />
        </div>
    )
}