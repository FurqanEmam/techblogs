import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Calculation from '../Calculation/Calculation';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/public/data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    return (
        <div>
            <div>
                {
                    blogs.map(blog => <Post 
                    key={blog.guid}
                    blog={blog}
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