import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/index.jsx'
import Product from './pages/Product/index.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route
        element={<App />}
      >
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path=':productId'
          element={<Product />}
        />
      </Route>
    </Routes>
  </BrowserRouter>,
)
