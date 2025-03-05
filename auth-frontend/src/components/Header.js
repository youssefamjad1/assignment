// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>My App</h1>
        <nav>
          <Link to="/" className="btn btn-light me-2">Home</Link>
          <Link to="/login" className="btn btn-light me-2">Login</Link>
          <Link to="/register" className="btn btn-light">Register</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
