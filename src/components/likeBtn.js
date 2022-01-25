import React, { useState } from 'react';

const FaveButton = () => {
  const [ faved, setFaved ] = useState(false);

  const handleFave = e => {
      e.stopPropagation();
      setFaved(!faved)
  }

  return (
      <button role="switch" onClick={handleFave} style={{ color: faved ? 'blue' : 'grey'}}>Like</button>
  )
};

export default FaveButton;
