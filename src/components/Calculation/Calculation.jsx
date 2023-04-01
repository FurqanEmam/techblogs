import React from 'react';
import './Calculation.css'
import Bookmark from '../Bookmark/Bookmark';

const Calculation = (props) => {
    // console.log(props)
    const {bookmark, post} = props;
    
    let totalTime = 0;
    for (const time of post){
        totalTime = totalTime + time.read_time;
        // console.log(totalTime);
    }
    // let totalBookmarked = 0;
    

    return (
        <div>
            <div className="time-container">
                <h3>Spent time on read: {totalTime}min</h3>
            </div>
            <div className='bookmark-container'>
                <h3>Bookmarked blogs: {bookmark.length}</h3>
                {
                    bookmark.map((postData)=> <Bookmark
                    key={postData.guid}
                    postData={postData}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Calculation;