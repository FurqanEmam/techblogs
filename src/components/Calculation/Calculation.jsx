import React from 'react';
import './Calculation.css'

const Calculation = ({post}) => {
    // const post = props.post;
    // console.log(post)
    // const {post} = props;
    // console.log(post)
    let totalTime = 0;
    for (const time of post){
        totalTime = totalTime + time.read_time;
        // console.log(totalTime);
    }
    return (
        <div>
            <div className="time-container">
                <h3>Spent time on read: {totalTime}min</h3>
            </div>
            <div className='bookmark-container'>
                <h3>Bookmered blogs: </h3>
            </div>
        </div>
    );
};

export default Calculation;