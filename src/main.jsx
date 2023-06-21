import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './state/store.js'
import('preline')
import { Provider } from 'react-redux';
import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";
import Auth from './pages/Auth'
import Campaign from './pages/Campaign'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="auth" element={<Auth />} />
              <Route path="campaign" element={<Campaign />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
