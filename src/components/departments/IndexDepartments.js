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
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    
    // display: "grid",
    // gridTemplateColumns: "repeat(4, 1fr)",
    
    gap: ".5rem",
    width: '100%'
  }

  if (!departments) {

    return <p>Loading...</p>

  } else if (departments.length === 0) {

    return <p>No departments yet, go add some!</p>

  }
  // cards aren't rendering
  const departmentCards = departments.map(department => (
    <>
      <Link to={`/departments/${department._id}`} style={{textDecoration: 'none'}}>
        <Card className="department__card" key={department.id} >
          <Card className="department__image" style={{ backgroundImage: `url(${department.img})`}} >

          </Card>
         
        </Card>
        <p className="department__text" >
        {department.name}
        </p>
      </Link>
    </>
  ))


  return (
    <div className="container-md m-4">
      <div>
        <h2 className='ms-4'>Browse by Department</h2>
        
        <div className="card-container" style={ gridContainerStyle }>
          { departmentCards }
        </div>
      </div>
    </div>
  )
};


export default IndexDepartment;
