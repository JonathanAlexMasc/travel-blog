import React, { useEffect, useState } from "react";
import MinViewBlog from "../components/MinViewBlog";
import axios from 'axios';

//get all blogs
async function getData() {
    const response = await axios({
        method: 'get',
        url: 'https://tgtbackend.onrender.com/api/blogs'
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
                return (< MinViewBlog key={obj.id} id={obj.id} author={atts.blogauthor} title={atts.blogtitle} description={atts.blogdesc} date={atts.blogdate} preview={atts.blogpreview} />)
            })}
        </div>
    )

}