import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Calculation from '../Calculation/Calculation';
import './Blogs.css'


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [post, setPost] = useState([]);
    const [bookmark, setBookmark] = useState([])
    

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    const readTime = (blog) => {
        const newPost = [...post, blog];
        setPost(newPost)
    }

    const bookmarkHandle = (blog) =>{
        // console.log("bookmark", blog)
        const newBookmark = [...bookmark, blog];
        setBookmark(newBookmark);
        // console.log(newBookmark)
    }



    return (
        <div className='blogs-container'>
            <div>
                {
                    blogs.map(blog => <Post 
                    key={blog.guid}
                    blog={blog}
                    readTime={readTime}
                    bookmarkHandle = {bookmarkHandle}
                    ></Post>)
                }
            </div>
            <div>
                <Calculation 
                post={post}
                bookmark={bookmark}
                ></Calculation>
            </div>
        </div>
    );
};

export default Blogs;