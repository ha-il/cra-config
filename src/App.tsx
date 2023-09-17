import React, { MouseEventHandler } from 'react';

import './App.css';

function App() {
  const handleClickButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.currentTarget.disabled = true;
  };
  return (
    <>
      <h1>Hello World</h1>
      <button type="button" onClick={handleClickButton}>
        Click me!
      </button>
    </>
  );
}

export default App;
