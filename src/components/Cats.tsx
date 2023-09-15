import { useCat } from 'contexts/CatContext';
import React, { useState } from 'react';

function Cats() {
  const [cat, setCat] = useState('');
  const { getNewCat } = useCat();

  const getNewCatImage = async () => {
    const data = await getNewCat();
    setCat(data);
  };

  return (
    <div>
      <button type="button" onClick={getNewCatImage}>
        New Cat!
      </button>
      <img
        src={`https://cataas.com/cat/${cat}`}
        alt="cat"
        style={{ display: 'block', width: '320px' }}
      />
    </div>
  );
}
export default Cats;
