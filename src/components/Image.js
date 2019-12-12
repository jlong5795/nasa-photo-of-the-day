import React from 'react';

const Image = props => {
    return(
        <div className='image-container'>
            <img src={props.url} alt='APOD - NASA'/>{/*Need to update src*/}
            <p>Copyright: {props.copyright}</p>
        </div>
    )
}

export default Image;