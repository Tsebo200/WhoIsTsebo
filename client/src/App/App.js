// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
// const Gallery = lazy(() => import('../Pages/Gallery'));
// import React, { Suspense, lazy } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
       <Route path="/" element={<Home/>}/>
       </Routes> 
      </header>
    </div>


  //   <Suspense fallback={<div>Loading...</div>}>
  //   <Routes>
  //   <Route path="/" element={<Home/>}/>
  //     <Route path="/gallery" element={<Gallery />} />
  //   </Routes>
  // </Suspense>
  );
}


export default App;

