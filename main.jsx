import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import StorContextProvider from './Contaxt/StorContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
  <StorContextProvider>
    <App />
  </StorContextProvider>
  </BrowserRouter>
  // </StrictMode>,
)
