import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <div className='question-section'>
                <h5 className='question-title'>props vs State</h5>
                <p className='answer'>state is owned locally and it can update automatically, wherease props owned by parent props only get what the dev sent to it.</p>
            </div>
            <div className='question-section'>
                <h5 className='question-title'>How does useState works?</h5>
                <p className='answer'>useState is a react hook, whenever our components render useState updates itself</p>
            </div>
            <div className='question-section'>
                <h5 className='question-title'>Purpose of useEffect other than fetching data?</h5>
                <p className='answer'>To tell react that our components has a effect it needs to be update.</p>
            </div>
            <div className='question-section'>
                <h5 className='question-title'>How does React Work?</h5>
                <p className='answer'>React divide the whole website into pieces name components and add them where its needed.</p>
            </div>
        </div>
    );
};

export default Question;