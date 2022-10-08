import { useState } from 'react'
import './App.css'
import MiApi from "./assets/components/MiApi";
import MyContextApi from "./assets/context/MyProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./assets/components/NotFound";
import Pokemon from "./assets/components/Pokemon";
import NavBar from "./assets/components/NavBar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <MyContextApi>
    <Router>
    <NavBar /> 
    <Routes>
      <Route path="/" element={<MiApi/>} />    
      <Route path="/Pokemon" element={<Pokemon/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </Router>
      
  </MyContextApi> 
  )
}

export default App
