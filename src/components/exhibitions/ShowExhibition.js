import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllExhibitions } from '../../api/exhibition';

const ShowExhibition = () => {
  const { id } = useParams();
  const [exhibition, setExhibition] = useState(null);

  useEffect(() => {
    getAllExhibitions().then((exhibitions) => {
      const exhibition = exhibitions.find((e) => e.id === id);
      setExhibition(exhibition);
    });
  }, [id]);

  if (!exhibition) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{exhibition.title}</h1>
      <p>{exhibition.description}</p>
    </div>
  );
};

export default ShowExhibition;
