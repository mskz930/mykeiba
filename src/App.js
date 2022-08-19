import logo from './logo.svg';
import './App.css';
import Contents from './Contents.js';
import Navbar from './components/Navbar.js';
import Search from './Search.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contents />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
