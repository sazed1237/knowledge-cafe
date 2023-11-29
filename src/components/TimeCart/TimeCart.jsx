import React from 'react';
import './TimeCart.css'

const TimeCart = ({timeCart}) => {
    console.log(timeCart)

    let totalTime = 0;
    for(const time of timeCart){
        totalTime = totalTime + time.time
    }

    return (
        <div className='timeCart'>
            <h3>Spent time on read: {totalTime}</h3>
        </div>
    );
};

export default TimeCart;