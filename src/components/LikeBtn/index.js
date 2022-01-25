import React, { useState } from 'react';

const LikeBtn = () => {
  const [ faved, setFaved ] = useState(false);

  const handleFave = e => {
      e.stopPropagation();
      setFaved(!faved)
  }

  return (
      <button role="switch" onClick={handleFave} style={{ color: faved ? 'blue' : 'grey'}}>Like</button>
  )
};

export default LikeBtn;
