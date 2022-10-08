import { useState } from 'react'
import './App.css'

import MyProvider from './assets/context/MyProvider';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
  <MyProvider>

  </MyProvider>
  );
}

export default App
