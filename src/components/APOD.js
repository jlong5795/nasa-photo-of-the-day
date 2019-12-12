import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function APOD(){
  const [apod, setApod] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=3LC9oAUbVtTlxK7EWHs4Fb48dLYuQhOeySgZDmbh')
      .then(response => {
        setApod(response.data);
        console.log(response.data);
        
      })
      .catch(error => {
        console.log('The data was not returned.', error);
      })
  }, []);
    return (
      <div></div>
    )
};