import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IndexDepartment = () => {
  // State to store the departments data
  const [departments, setDepartments] = useState([]);
  
  // State to store the number of departments to display
  const [displayCount, setDisplayCount] = useState(8);

  // Use effect to fetch the departments data from the API
  useEffect(() => {
    fetch('https://openaccess-api.clevelandart.org/api/departments')
      .then((response) => response.json())
      .then((data) => setDepartments(data));
  }, []); // Second argument of an empty array means this useEffect will only run once on component mount

  // Function to handle the "handleAllArtworks" button click
  const handleAllArtworks = () => {
    // Update displayCount to display all departments
    setDisplayCount(departments.length);
  };

  return (
    <div>
      <h1>View Artworks</h1>
      <p>Search by Department</p>
      <ul>
   // Need to somehow display department images with their corresponding names, ex: Asian Art 
        {departments.slice(0, displayCount).map((department) => (
          <li key={department.departmentID}>{department.displayName}</li>
        ))}
      </ul>

      {displayCount < departments.length && (
        <button onClick={handleAllArtworks}>See All Artworks</button>
      )}
    </div>
  );
};

export default IndexDepartment;
