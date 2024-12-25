import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
// import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
      </Routes>
    </>
  )
}

export default App
