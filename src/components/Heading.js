import React from 'react';
import { CardTitle, CardSubtitle } from 'reactstrap';

const Heading = props => {
    return (
        <div>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle>{props.date}</CardSubtitle>
            <p>Copyright: {props.copyright}</p>
        </div>
    )
}

export default Heading;