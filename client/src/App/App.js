// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Pages/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
       <Route path="/" element={<Main/>}/>
       </Routes> 
      </header>
    </div>
  );
}


export default App;
