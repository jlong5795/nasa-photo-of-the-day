import React from 'react';

const Image = props => {
    return(
        <div className='image-container'>
            <img src="https://apod.nasa.gov/apod/image/1912/m78ldn1622barnardsloopJulio1100.jpg" alt='APOD - NASA'/>{/*Need to update src*/}
            <p>Copywright: {props.copywright}</p>
        </div>
    )
}

export default Image;