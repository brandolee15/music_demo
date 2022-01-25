import React from 'react';

const ShowCard = ({show:{name,year}}) => {
  return <p>
      {name} are an American rock band formed in Las Vegas in {year} by Brandon Flowers and Dave Keuning.
  </p>;
};

export default ShowCard;
