import React, { useState, useEffect } from 'react';
import { getAllDepartments } from '../../api/departments'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const IndexDepartment = (props) => {
  // State to store the departments data
  const [departments, setDepartments] = useState(null);

  useEffect(() => {
    getAllDepartments() 
      .then(res => setDepartments(res.data.departments))
      .catch(err => console.log(err))
  }, []); // Second argument of an empty array means this useEffect will only run once on component mount


  const handleClick = (e) => {
    e.preventDefault()
    const title = e.target.innerText
    const searchTitle = title.split(' ').join('%20')
    console.log('searchTitle: ', searchTitle)  
    
  } 


  if (!departments) {
    // if no pets loaded yet, display 'loading'
    return <p>Loading...</p>
  } else if (departments.length === 0) {
    // otherwise if there ARE no pets, display that message
    return <p>No departments yet, go add some!</p>
  }
  // cards aren't rendering
  const departmentCards = departments.map(department => (
    <Card key={department.id} style={{ backgroundImage: `url(${department.img})`, width: "250px" }}>
      <Card.Header>
        {department.name}
      </Card.Header>
      <Card.Footer>
        {/* <button href={`/departments/${department._id}`} onClick={handleClick}>{department.name}</button> */}
        <Link to={`/departments/${department._id}`}>
          <button>{department.name}</button>
        </Link>
      </Card.Footer>
    </Card>
  ))


  return (
    <div className="container-md m-4">
      <div>
        <h1>View Artworks</h1>
        <p>Search by Department</p>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
        height: "100vh",
        overflow: "scroll"
      }}>
        {departmentCards}
      </div>
    </div>
  )
};

export default IndexDepartment;
