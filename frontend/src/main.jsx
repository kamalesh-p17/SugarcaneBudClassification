import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImageContextProvider from './Context/ImageContext.jsx'

createRoot(document.getElementById('root')).render(
  <ImageContextProvider>
    <App />
  </ImageContextProvider>,
)
