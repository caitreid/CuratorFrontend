import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { getAllExhibitions } from '../../api/exhibition'
import Card from 'react-bootstrap/Card'
import { Link, Route, Switch } from 'react-router-dom'
import ShowExhibition from './ShowExhibition'
//import IndexArtworks from '../artworks/IndexArtworks';


const cardContainerStyle = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  
}

const IndexExhibition = (props) => {
  // State to store the departments data
  const [exhibitions, setExhibitions] = useState(null);
  // console.log('this is exhibition', exhibitions)
  // console.log('this is props', props)
  
  // State to store the number of departments to display
  //const [displayCount, setDisplayCount] = useState(8);

  //Use effect to fetch the departments data from the API
  useEffect(() => {
    getAllExhibitions() 
      .then(res => setExhibitions(res.data.exhibitions))
      .catch(err => console.log(err))
}, []); 

if (!exhibitions) {
  // if no data is loaded yet, display 'loading'
  return <p>Loading...</p>
} else if (exhibitions.length === 0) {
  // otherwise if there ARE no pets, display that message
  return <p>No exhibitions yet, go add some!</p>
}


const exhibitionCards = exhibitions.map(exhibition => (
  <Card
    key={exhibition.id}
    
    style={{
      width: '30%',
      margin: 5,
      // background: "#fff",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
      overflow: "hidden"
      // position: "relative"
    }}
  >
  <div
    style={{
      backgroundImage: `url(${exhibition.img})`,
      backgroundSize: "cover",
      height: "250px"
    }}
  />
  <div
    style={{
      padding: "1rem",
      position: "relative"
    }}
  >
    <h2
      style={{
        fontWeight: "bold",
        fontSize: "18px",
        marginBottom: "5px",
        color: "#000"
      }}
    >
      {exhibition.title}
    </h2>
    <div
      style={{
        
        // left: "20px",
        color: "#000",
        fontSize: "14px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center"
      }}
    >
      
      <div>
        <div>{exhibition.startDate}</div>
        <div>{exhibition.endDate}</div>
      </div>
    </div>
  </div>
  <Card.Footer>
        <Link to={`/exhibition/${exhibition._id}`}>
          <button className='btn btn-light'>{exhibition.title}</button>
        </Link>
      </Card.Footer>
</Card>
)




);

  return (
    <div className='container-md p-4'>
      <h1>All Exhibitions</h1>
      <div className='my-4'>
        <Link to={`/exhibitions/create`} className='btn btn-success'>Create Exhibition</Link>
        <Link to={`/exhibitions/mine`} className='btn btn-primary mx-4'>My Exhibitions</Link>
      </div>
      
      <div style= {cardContainerStyle}>
        { exhibitionCards }
      </div>
    </div>
  )
};
 


export default IndexExhibition

