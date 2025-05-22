import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import { BrowserRouter , Routes , Route } from "react-router";

import './tailwind.css'
import Home from './commerce/home.jsx'

createRoot(document.getElementById('root')).render(
  
    <Home />
  
)
