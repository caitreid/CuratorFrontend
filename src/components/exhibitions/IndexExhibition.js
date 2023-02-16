import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllExhibitions } from '../../api/exhibition'
import Card from 'react-bootstrap/Card'

const IndexExhibition = (props) => {
  // State to store the departments data
  const [exhibitions, setExhibitions] = useState(null);
  console.log('this is exhibition', exhibitions)
  console.log('this is props', props)
  
  // State to store the number of departments to display
  //const [displayCount, setDisplayCount] = useState(8);

  //Use effect to fetch the departments data from the API
  useEffect(() => {
    getAllExhibitions() 
      .then(res => setExhibitions(res.data.exhibitions))
      .catch(err => console.log(err))
}, []); // Second argument of an empty array means this useEffect will only run once on component mount
console.log('this is an exhibition', exhibitions)
  // Function to handle the "handleAllArtworks" button click
 // const handleAllArtworks = () => {
    // Update displayCount to display all departments
 //   setDisplayCount(departments.length);
 // };

// if error, display an error
// if (error) {
//   return <p>Error!</p>
// }

if (!exhibitions) {
  // if no data is loaded yet, display 'loading'
  return <p>Loading...</p>
} else if (exhibitions.length === 0) {
  // otherwise if there ARE no pets, display that message
  return <p>No exhibitions yet, go add some!</p>
}

const exhibitionCards = exhibitions.map(exhibition => (
  <Card key={exhibition.id} style={{ backgroundImage: `url(${exhibition.img})`, width: "250px" }}>
    <Card.Header>
      {exhibition.title}
    </Card.Header>
    <Card.Body>
      <p>Start Date: {exhibition.startDate}</p>
      <p>End Date: {exhibition.endDate}</p>
    </Card.Body>
  </Card>
))
console.log('cards are not showing', exhibitionCards)


return (
  <div>
    <div>
      <h1>Featured Online Exhibitions</h1>
    </div>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1rem",
      height: "100vh",
      overflow: "scroll"
    }}>
      {exhibitionCards}
    </div>
  </div>
)

  };

export default IndexExhibition;
