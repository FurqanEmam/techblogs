import React from 'react';
import './Bookmark.css'
const Bookmark = (props) => {
    const{title} = props.postData;
    return (
        <div className='bookmark-container'>
            <p className='bookmark-title'>{title}</p>
        </div>
    );
};

export default Bookmark;