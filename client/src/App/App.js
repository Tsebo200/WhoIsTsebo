// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
       <Route path="/" element={<Dashboard/>}/>
       </Routes> 
      </header>
    </div>
  );
}


export default App;
