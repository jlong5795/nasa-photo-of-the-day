import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import axios from 'axios';
import Heading from './Heading';
import Image from './Image';
import Explanation from './Explanation';


export default function APOD(){
  const [apod, setApod] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=3LC9oAUbVtTlxK7EWHs4Fb48dLYuQhOeySgZDmbh')
      .then(response => {
        setApod(response.data);
        console.log("Response", response.data);
        
      })
      .catch(error => {
        console.log('The data was not returned.', error);
      })
  }, []);
    return (
      <div className='apoc-card'>
        





        <Heading title={apod.title} date={apod.date}/>
        <Image url={apod.url} copyright={apod.copyright} />
        <Explanation explanation={apod.explanation} />
      </div>
    )
};