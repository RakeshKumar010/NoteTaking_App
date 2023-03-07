import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import AddNotes from './components/AddNotes'
import Login from './components/Login'
import Nav from './components/Nav'
import Notes from './components/Notes'
import Update from './components/Update'
import Signup from './Signup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>

      <Routes>
        <Route path='/' element={<Notes/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Addnotes' element={<AddNotes/>} />
        <Route path='/update/:id' element={<Update/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App