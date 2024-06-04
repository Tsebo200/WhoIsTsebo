// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Gallery from '../Pages/Gallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Gallery" element={<Gallery/>}/>
       </Routes> 
      </header>
    </div>
  );
}


export default App;
