import React from 'react';

const Heading = props => {
    return (
        <div>
            <h2>{props.title} {props.date}</h2>
        </div>
    )
}

export default Heading;