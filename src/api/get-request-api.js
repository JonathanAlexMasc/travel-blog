import axios from "axios";

export async function getImageWithID(id) {
    const response = await axios.get(`https://tgtbackend.onrender.com/api/blogs/${id}?populate=*`);
    const { data } = response;
    const initImage = data.data.attributes.blogimg;
    const imgURL = initImage.data.attributes.url;
    // console.log('http://localhost:1337' + blogImg.url); - this is what I needed to load the //imageverImg
    console.log("in this bitch");
    return imgURL;
}

// helper function
function getUrl(obj) {
    console.log("in this bitch");
    return obj.attributes.blogimg.data.attributes.url;
}

export async function getAllImages() {
    const res = await axios.get('https://tgtbackend.onrender.com/api/blogs?populate=*');
    let topLevelArray = res.data.data;
    let urlArr = [];
    urlArr = topLevelArray.map((eachObject) => {
        return getUrl(eachObject);
    })
    console.log("in this bitch");
    return urlArr;
}

export async function getAllBlogs() {
    const res = await axios.get('https://tgtbackend.onrender.com/api/blogs');
    let topLevelArray = res.data;
    console.log("in this bitch");
    return topLevelArray.data;
}

export async function getBlogWithWindowID() {
    const params = window.location.pathname;
    const currId = params.substring(params.lastIndexOf('/') + 1);
    const res = await axios.get('https://tgtbackend.onrender.com/api/blogs/' + currId);
    console.log("in this bitch");
    const { data } = res;
    return (data.data.attributes);
}

export async function getImageWithWindowID() {
    const params = window.location.pathname;
    const currId = params.substring(params.lastIndexOf('/') + 1);
    const response = await axios.get(`https://tgtbackend.onrender.com/api/blogs/${currId}?populate=*`)
    const { data } = response;
    const cover = data.data.attributes.blogimg;
    const imgUrl = cover.data.attributes.url;
    // console.log('http://localhost:1337' + blogImg.url); - this is what I needed to load the //image
    console.log("in this bitch");
    return imgUrl;
}