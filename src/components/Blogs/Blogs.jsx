import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Calculation from '../Calculation/Calculation';
import './Blogs.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from '../Question/Question';


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
        const newBookmark = [...bookmark, blog];
        // console.log(newBookmark)
        setBookmark(newBookmark);
        toast("you have already bookmarked this blog.")
        // const objData = newBookmark.map(authorInfo => (authorInfo.guid));
        // // console.log(objData.guid)
        // let idArray = [];
        // if (objData.includes(blog.guid)) {
        //     idArray.push(objData);
        //     console.log(idArray)
            
        //   }
        //   else {
        //     toast("you have already bookmarked this blog.")
        //   }
        
        
    }


    return (
        <div>
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
                    <div>
                        {/* <button onClick={notify}>Notify!</button>
                        <ToastContainer /> */}
                    </div>
                </div>
                
            </div>
            <div className='question-container'>
                <Question></Question>
            </div>
        </div>
        
    );
};

export default Blogs;