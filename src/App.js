import React from 'react';

import './App.css';
import Navbar from './componments/navbar';
import List from'./componments/list';


function App() {
  return (
    <div className="container-fluid" >
      <Navbar />
      <div className='row mt-3'>
        <List />

      </div>
    
    </div>
  );
}

export default App;
