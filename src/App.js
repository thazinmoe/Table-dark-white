import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cruddata from './Components/Cruddata';
import { Empedit } from './Components/Empedit';
import { Empcreate } from './Components/Empcreate';

function App() {
  return (
    <div className="container">
      <h1>Table with Dark and White Theme</h1>
      <BrowserRouter>
        <Routes>
            <Route  path="/read" element={ <Cruddata/> } />
            <Route path="/empdata" element={ <Empedit/> }/>
            <Route path="/" element={ <Empcreate/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
