import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setcount] = useState(false);
  const [count2,setcount2] = useState(false);
  const handleChange = () => {
    setcount(true)
    setcount2(false)
  }
  const handleChange2 = () => {
    setcount2(true)
    setcount(false)
  }
  const handleLeave = () => {
    setcount2(false)
    setcount(false)
  }
  return (
    <div className={`container ${count ? "hover-left" : count2 ? "hover-right" : ""}`} >
    <div className='split left' onMouseEnter={handleChange} onMouseLeave={handleLeave}>
      <h1>Playstation 5</h1>
      <a href='#' className='btn'>Buy Now</a>
    </div>
    <div className='split right' onMouseEnter={handleChange2} onMouseLeave={handleLeave}>
      <h1>Xbox Series X</h1>
      <a href='#' className='btn'>Buy Now</a>
    </div>
    </div>
  );
}

export default App;



