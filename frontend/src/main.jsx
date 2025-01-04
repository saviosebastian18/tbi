import React from 'React'
import { StrictMode } from 'React'
import { CreateRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
