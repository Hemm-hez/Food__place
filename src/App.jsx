import { useState, useEffect} from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Error from './pages/Error'
import Singlemeal from './pages/Singlemeal'
import { AppProvider } from './hooks/context'
import { useContext } from 'react'

function App() {

  return (
  <div className="container">
     <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='*' element={<Error/>}/>
    <Route path='/meal/:id' element={<Singlemeal/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  </div>
  )
}

export default App
