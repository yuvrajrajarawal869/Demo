
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage'; 
import ClientsPage from './Pages/ClientsPage/ClientsPage'; 
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactsPage from './Pages/ContactsPage/ContactsPage'; 
import BlogsPage from './Pages/BlogsPage/BlogsPage'; 
import SupportsPage from './Pages/SupportsPage/SupportsPage'; 
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/supports" element={<SupportsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

