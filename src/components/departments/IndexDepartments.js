import React, { useState, useEffect } from 'react'
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

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
    width: '100%'
  }

  if (!departments) {

    return <p>Loading...</p>

  } else if (departments.length === 0) {

    return <p>No departments yet, go add some!</p>

  }
  // cards aren't rendering
  const departmentCards = departments.map(department => (
    <Card key={department.id} style={{ backgroundImage: `url(${department.img})`, width: "250px" }}>
      <Card.Header>
        {department.name}
      </Card.Header>
      <Card.Footer>
        <Link to={`/departments/${department._id}`}>
          <button className='btn btn-light'>{department.name}</button>
        </Link>
      </Card.Footer>
    </Card>
  ))


  return (
    <div className="container-md m-4">
      <div>
        <h1>View Artworks</h1>
        <p>Search by Department</p>
        <div className="card-container" style={ gridContainerStyle }>
          { departmentCards }
        </div>
      </div>
    </div>
  )
};


export default IndexDepartment;
