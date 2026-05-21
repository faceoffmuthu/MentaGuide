import React from 'react'
import Homepage from './pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Resetpassword from './pages/Resetpassword'
import Emailverify from './pages/Emailverify'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<Resetpassword />} />
      <Route path="/email-verify" element={<Emailverify />} />
    </Routes>
  )
}

export default App
