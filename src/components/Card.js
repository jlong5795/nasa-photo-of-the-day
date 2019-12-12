import React from "react";
import Image from './Image';

const Card = props => {
    return <div className='apod'>
        <h2>Title: {props.title} {props.date}</h2>
        <Image url={props.url} copywright={props.copywright} />

    </div>
}

export default Card;