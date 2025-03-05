import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container d-flex justify-content-center py-5 flex-grow-1">
        <div className="col-md-6 text-center">
          <h1>Welcome to Our App</h1>
          <p>Sign up or login to get started</p>
          <div>
            <Link to="/register" className="btn btn-primary m-2">Sign Up</Link>
            <Link to="/login" className="btn btn-secondary m-2">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
