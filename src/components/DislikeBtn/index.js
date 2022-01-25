import React, { useState } from 'react';

const DislikeBtn = () => {
  const [ faved, setFaved ] = useState(false);

  const handleFave = e => {
      e.stopPropagation();
      setFaved(!faved)
  }

  return (
      <button role="switch" onClick={handleFave} style={{ color: faved ? 'Red' : 'grey'}}>Dislike</button>
  )
};

export default DislikeBtn;