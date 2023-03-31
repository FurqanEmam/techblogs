import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Calculation from '../Calculation/Calculation';
import './Blogs.css'


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    const readTime = (blog) => {
        console.log(blog)
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
                <Calculation></Calculation>
            </div>
        </div>
    );
};

export default Blogs;