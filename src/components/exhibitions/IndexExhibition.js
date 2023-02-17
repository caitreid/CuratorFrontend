import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllExhibitions } from '../../api/exhibition'
import Card from 'react-bootstrap/Card'
import { Link, Route, Switch } from 'react-router-dom'
import ShowExhibition from './ShowExhibition'

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

const exhibitionCardsTop = exhibitions.slice(0, 2).map(exhibition => (
  <Link key={exhibition.id} to={`/exhibitions/${exhibition.id}`}>
    <Card
  style={{
    background: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative"
  }}
>
  <div
    style={{
      backgroundImage: `url(${exhibition.img})`,
      backgroundSize: "cover",
      height: "200px"
    }}
  />
  <div
    style={{
      padding: "20px",
      height: "100%",
      position: "relative"
    }}
  >
    <h2
      style={{
        fontWeight: "bold",
        fontSize: "18px",
        marginBottom: "10px",
        color: "#000"
      }}
    >
      {exhibition.title}
    </h2>
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        color: "#000",
        fontSize: "14px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div style={{ marginRight: "10px" }}>
      </div>
      <div>
        <div>{exhibition.startDate}</div>
        <div>{exhibition.endDate}</div>
      </div>
    </div>
  </div>
</Card>
</Link>
));


const exhibitionCardsBottom = exhibitions.slice(2, 5).map((exhibition, index) => (
  <Link key={exhibition.id} to={`/exhibitions/${exhibition.id}`}>
    <Card
  style={{
    background: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative"
  }}
>
  <div
    style={{
      backgroundImage: `url(${exhibition.img})`,
      backgroundSize: "cover",
      height: "200px"
    }}
  />
  <div
    style={{
      padding: "20px",
      height: "100%",
      position: "relative"
    }}
  >
    <h2
      style={{
        fontWeight: "bold",
        fontSize: "18px",
        marginBottom: "10px",
        color: "#000"
      }}
    >
      {exhibition.title}
    </h2>
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        color: "#000",
        fontSize: "14px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div style={{ marginRight: "10px" }}>
      </div>
      <div>
        <div>{exhibition.startDate}</div>
        <div>{exhibition.endDate}</div>
      </div>
    </div>
  </div>
</Card>
</Link>
));

return (
  <div>
    <div>
      <h1>Featured Online Exhibitions</h1>
    </div>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1r)",
      gap: "1rem",
      //height: "100vh",
      overflow: "scroll",
      justifyContent: "center"
    }}>
      <div style={{ gridRow: "1", gridColumn: "3 / span 1" }}>
        {exhibitionCardsTop[1]}
       </div>
      <div style={{ gridRow: "1", gridColumn: "2 / span 1" }}>
        {exhibitionCardsTop[0]}
      </div>
      <div style={{ gridRow: "2", gridColumn: "1" }}>
        {exhibitionCardsBottom[0]}
      </div>
      <div style={{ gridRow: "2", gridColumn: "2" }}>
        {exhibitionCardsBottom[1]}
      </div>
      <div style={{ gridRow: "2", gridColumn: "3" }}>
        {exhibitionCardsBottom[2]}
      </div>
      <div style={{ gridRow: "3", gridColumn: "1" }}>
        {exhibitionCardsBottom[3]}
      </div>
      </div>
      <div>
        <h3>Create Your Own Online Exhibition</h3>
      </div>
      <div>
      <p>Create an account, browse the collection and curate your own online exhibition.</p>
      <button>Get Started</button>
      </div>
      <Switch>
        <Route path="/exhibitions/:id">
          <ShowExhibition exhibitions={exhibitions} />
        </Route>
      </Switch>
      </div>
    )
  };
 

export default IndexExhibition;