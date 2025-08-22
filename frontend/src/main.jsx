import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BusinessListing from './pages/BusinessListing.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }></Route>
        <Route path="/:city/search" element={ <BusinessListing /> }></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
