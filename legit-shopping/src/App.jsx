import './App.css'
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [cart , setCart] = useState([]);

  return (
    <div className='container'>
      <Navbar/>
      <Outlet context={[cart , setCart]}/>
    </div>
  )
}

export default App;
