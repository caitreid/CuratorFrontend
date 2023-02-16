import React, { useState, useEffect } from 'react';
import { getAllDepartments } from '../../api/departments'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const IndexDepartment = (props) => {
  // State to store the departments data
  const [departments, setDepartments] = useState(null);
  // console.log('this is departments', departments)
  // console.log('this is props', props)
  // State to store the number of departments to display
  //const [displayCount, setDisplayCount] = useState(8);

  //Use effect to fetch the departments data from the API
  useEffect(() => {
    getAllDepartments() 
      .then(res => setDepartments(res.data.departments))
      .catch(err => console.log(err))
}, []); // Second argument of an empty array means this useEffect will only run once on component mount
  // console.log('this is department', departments)
  // Function to handle the "handleAllArtworks" button click
 // const handleAllArtworks = () => {
    // Update displayCount to display all departments
 //   setDisplayCount(departments.length);
 // };

// if error, display an error
// if (error) {
//   return <p>Error!</p>
// }

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
  <div>
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


  // return (
  //   <div>
  //     <h1>View Artworks</h1>
  //     <p>Search by Department</p>
  //      {departmentCards}

  //     {/* <ul>
  //  // Need to somehow display department images with their corresponding names, ex: Asian Art 
  //       {departments.slice(0, displayCount).map((department) => (
  //         <li key={department.departmentID}>{department.displayName}</li>
  //       ))}
  //     </ul>

  //     {displayCount < departments.length && (
  //       <button onClick={handleAllArtworks}>See All Artworks</button>
  //     )} */}
  //   </div>
  // )
// }


//   return (
    
//     <div>
//       <h1>View Artworks</h1>
//       <p>Search by Department</p>
//        {departmentCards}




//       {/* <ul>
//    // Need to somehow display department images with their corresponding names, ex: Asian Art 
//         {departments.slice(0, displayCount).map((department) => (
//           <li key={department.departmentID}>{department.displayName}</li>
//         ))}
//       </ul>

//       {displayCount < departments.length && (
//         <button onClick={handleAllArtworks}>See All Artworks</button>
//       )} */}

//     </div>
    
//   );
// };


 export default IndexDepartment;
