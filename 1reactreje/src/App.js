
import test from './test';

import './App.css';
import { useState } from 'react';

function App() {
  const[show,setshow]= useState(false)
  return (
   <>
   <button onClick={() =>setshow(show=>!show)}>
    {show ? "gizle" :"gizle"}
   </button>
   <test/>
   </>


      
    
      
  
  );
}

export default App;
