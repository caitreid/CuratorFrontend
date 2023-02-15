import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllDepartments } from '../../api/departments'
import Card from 'react-bootstrap/Card'

const IndexDepartment = (props) => {
  // State to store the departments data
  const [departments, setDepartments] = useState(null);
  console.log('this is departments', departments)
  console.log('this is props', props)
  
  // State to store the number of departments to display
  //const [displayCount, setDisplayCount] = useState(8);

  //Use effect to fetch the departments data from the API
  useEffect(() => {
    getAllDepartments() 
      .then(res => setDepartments(res.data.departments))
      .catch(err => console.log(err))
}, []); // Second argument of an empty array means this useEffect will only run once on component mount
console.log('this is department', departments)
  // Function to handle the "handleAllArtworks" button click
 // const handleAllArtworks = () => {
    // Update displayCount to display all departments
 //   setDisplayCount(departments.length);
 // };

// if error, display an error
// if (error) {
//   return <p>Error!</p>
// }

if (!departments) {
  // if no pets loaded yet, display 'loading'
  return <p>Loading...</p>
} else if (departments.length === 0) {
  // otherwise if there ARE no pets, display that message
  return <p>No departments yet, go add some!</p>
}

  const departmentCards =  departments.map(department => (
    <Card key={ department.id }>
        <Card.Header>
            { department.name }
        </Card.Header>


    </Card>
))




  return (
    <div>
      <h1>View Artworks</h1>
      <p>Search by Department</p>
       {departmentCards}




      {/* <ul>
   // Need to somehow display department images with their corresponding names, ex: Asian Art 
        {departments.slice(0, displayCount).map((department) => (
          <li key={department.departmentID}>{department.displayName}</li>
        ))}
      </ul>

      {displayCount < departments.length && (
        <button onClick={handleAllArtworks}>See All Artworks</button>
      )} */}

    </div>
  );
};

export default IndexDepartment;
