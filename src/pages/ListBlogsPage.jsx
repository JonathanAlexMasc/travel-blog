import React, { useEffect, useState } from "react";
import MinViewBlog from "../components/MinViewBlog";
import axios from 'axios';

//get all blogs
async function getData() {
    const response = await axios({
        method: 'get',
        url: 'http://localhost:1337/api/blogs'
    });

    const { data } = await response;
    const BlogObject = data.data;
    return BlogObject;
}

export default function ListBlogsPage() {

    const [blogArray, setBlogArray] = useState([]);

    useEffect(() => {
        getData().then(res => { setBlogArray(res) });
    }, []);

    return (
        <div className="d-flex flex-column justify-content-start">
            {/* iterating through every blogpost */}
            {blogArray.map((obj) => {
                const atts = obj.attributes;
                return (< MinViewBlog key={obj.id} id={obj.id} author={atts.Author} title={atts.Title} description={atts.Description} date={atts.publishedDate} preview={atts.preview} />)
            })}
        </div>
    )

}