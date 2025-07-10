import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home.jsx'
import Footer from './components/Footer.jsx'
import LogIn from './page/LogIn.jsx'
import SignUp from './page/SignUp.jsx'
import ProductDetail from './page/ProductDetail.jsx';


import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const hideLayout = location.pathname === "/logIn" || location.pathname === "/signUp";

  return (
    <div>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default App
