import React from 'react';
import { useParams } from 'react-router-dom';

const ShowExhibition = ({ exhibitions }) => {
  const { id } = useParams();
  const exhibition = exhibitions.find(e => e.id === id);

  return (
  <div>
  <h1>{exhibition.title}</h1>
  <p>{exhibition.description}</p>
  </div>
  );
  }


export default ShowExhibition;