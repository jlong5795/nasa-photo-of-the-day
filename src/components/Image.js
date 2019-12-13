import React from 'react';
import { CardImg } from 'reactstrap';

const Image = props => {
    return(
        <div className='image-container'>
            <CardImg top width="100%" src={props.url} alt='APOD - NASA' />
            
        </div>
    )
}

export default Image;