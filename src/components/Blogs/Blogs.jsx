import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Calculation from '../Calculation/Calculation';
import './Blogs.css'


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    const readTime = (blog) => {
        const newPost = [...post, blog];
        setPost(newPost)
    }

    return (
        <div className='blogs-container'>
            <div>
                {
                    blogs.map(blog => <Post 
                    key={blog.guid}
                    blog={blog}
                    readTime={readTime}
                    ></Post>)
                }
            </div>
            <div>
                <Calculation post={post}></Calculation>
                <h1>Post length: {post.length}</h1>
            </div>
        </div>
    );
};

export default Blogs;