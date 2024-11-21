import React from 'react';
import Rezocontrol from './components/rezocontrol';
import Index from './components/home-new';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/downloads/rezocontrol-app' element={<Rezocontrol />}/>
        <Route path='/' element={<Index />}/>
      </Routes>
    </>   
  );
}

export default App;
