import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Login from "./Login";
import Admin from './Admin'
import About from "./pages/About"
import Contact from "./pages/Contact"
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/contact" element={<Contact />} />
      
      
    </Routes>
  </BrowserRouter>
)



