import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Add bootstrap manual
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/js/bootstrap.bundle.js'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
