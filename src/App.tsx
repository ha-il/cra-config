import React from 'react';

import Auth from 'components/Auth';
import './App.css';
import Todos from 'components/Todos';

function App() {
  return (
    <>
      <Auth />
      <br />
      <Todos />
    </>
  );
}

export default App;
