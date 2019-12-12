import React from 'react';

export default Heading = props => {
    return (
        <div>
            <h2>{props.title} {props.date}</h2>
        </div>
    )
}