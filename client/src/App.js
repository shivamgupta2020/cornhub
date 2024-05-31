import React from 'react'
import WarningBox from './components/warning/warning'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/footer'
import CornTracker from './pages/cornTracker/cornTracker'
import './App.css'
import PreSale from './pages/presale/preSale'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/home/home'
import Share from './pages/share/share'
import Memefarm from './pages/memefarm/memefarm'
import Cornnomics from './pages/cornomics/cornomics'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<WarningBox />} />
          <Route path="/home" element={<Home />} />
          <Route path="/corntracker" element={<CornTracker />} />
          <Route path="/presale" element={<PreSale />} />
          <Route path="/cornomics" element={<Cornnomics />} />
          <Route path="/share" element={<Share />} />
          <Route path="/farm" element={<Memefarm/>} />
        </Routes>
      </div>
    </Router>)
}

export default App