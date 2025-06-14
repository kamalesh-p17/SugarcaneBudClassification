import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Camera from './Pages/Camera/Camera.jsx'
import Home from './Pages/Home/Home.jsx'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/camera' element={<Camera/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App