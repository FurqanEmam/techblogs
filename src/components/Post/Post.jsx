import React from 'react';
import './Post.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = (props) => {
    // console.log(props)
    
    
    const {name, author, cover, published_date, read_time, title} = props.blog;
    const readTime = props.readTime;
    const bookmarkHandle = props.bookmarkHandle;

    
    
    
    
    return (
        <div>
            <div className='post-container'>
                <img className='cover-image' src={cover} alt="cover images" />
                <div className='author-container'>
                    <img className='author-image' src={author} alt="author image" />
                    <div className='author-details'>
                        <div>
                            <h3>{name}</h3>
                            <p>{published_date} (5days ago)</p>
                        </div>
                        <div className='post-time'>
                            <p>{read_time} min read</p>
                            <img onClick={() => bookmarkHandle(props.blog)} id="bookmark" className='bookmark' src="https://cdn-icons-png.flaticon.com/512/25/25667.png" alt="" />
                            <ToastContainer /> 
                        </div>
                    </div>
                </div>
                <h1>{title}</h1>
                <p>#beginners #programming</p>
                <button onClick={() => readTime(props.blog)}>Mark as Read</button>
                
            </div>
        </div>
    );
};

export default Post;