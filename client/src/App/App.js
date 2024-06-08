// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Gallery from '../Pages/Gallery';
import AllAboutMe from '../Pages/AllAboutMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Gallery" element={<Gallery/>}/>
       <Route path="/AllAboutMe" element={<AllAboutMe/>}/>
       </Routes> 
      </header>
    </div>
  );
}


export default App;
