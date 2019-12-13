import React from 'react';
import { CardText } from 'reactstrap';

const Explanation = props => {
    return(
        <CardText>{props.explanation}</CardText>
    )
}

export default Explanation;