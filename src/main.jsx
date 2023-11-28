import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx' // Al cambiar el "export const" se utilizan las "{}" para importar

import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
