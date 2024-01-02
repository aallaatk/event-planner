import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './Components/Header.tsx'
import Footer from './Components/Footer.tsx'
ReactDOM.createRoot(document.querySelector('header')!).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.querySelector('footer')!).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
)
