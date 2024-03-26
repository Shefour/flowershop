import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import FAQPage from './pages/FAQ';
import Blog from './pages/Blog';
import Sklep from './pages/Sklep';
import Koszyk from './pages/Koszyk';
import Konto from './pages/Konto';

function App() {
  return (
    <>
        <div className='page'>
          <Navbar/>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/sklep" element={<Sklep />} />
                <Route path="/koszyk" element={<Koszyk />} />
                <Route path="/konto" element={<Konto />} />
                <Route path="/faq" element={<FAQPage />} />
              </Routes>
            </Router>
            <Footer/>
        </div>
    </>
  )
}

export default App
