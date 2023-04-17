import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Nav from './component/nav'
import Footer from './component/footer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Nav />
    <App />
<Footer />
  </React.StrictMode>,
)
