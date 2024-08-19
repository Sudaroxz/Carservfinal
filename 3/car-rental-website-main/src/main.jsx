import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Payment from './components/Payment.jsx'
import { BrowserRouter , Route , Routes} from "react-router-dom"
import Loginregister from './components/Loginregister.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
       <Route path = "/" element = {<App/>} />
       <Route path = "/payment" element = {<Payment/>} />
       <Route path = "/login" element = {<Loginregister/>} />
    </Routes>
    </BrowserRouter>


  </React.StrictMode>,
)
