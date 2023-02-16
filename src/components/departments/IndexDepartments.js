import React, { useState, useEffect } from 'react';
import { getAllDepartments } from '../../api/departments'
import Card from 'react-bootstrap/Card'

const IndexDepartment = (props) => {
  // State to store the departments data
  const [departments, setDepartments] = useState(null);
  console.log('this is departments', departments)
  console.log('this is props', props)
  

  // Use effect to fetch the departments data from the API
  useEffect(() => {
    getAllDepartments() 
      .then(res => setDepartments(res.data.departments))
      .catch(err => console.log(err))
  }, []); // Second argument of an empty array means this useEffect will only run once on component mount
  console.log('this is department', departments)

if (!departments) {
  // if no pets loaded yet, display 'loading'
  return <p>Loading...</p>
} else if (departments.length === 0) {
  // otherwise if there ARE no pets, display that message
  return <p>No departments yet, go add some!</p>
}

  const departmentCards = departments.map(department => (
    <Card key={department.id} style={{ backgroundImage: `url(${department.img})`, width: "250px" }}>
      <Card.Header>
        {department.name}
      </Card.Header>
    </Card>
  ))
  return (
    <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
        height: "100vh",
        overflow: "scroll"
      }}>
      {departmentCards}
    </div>
  )
};

export default IndexDepartment;
