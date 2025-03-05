// pages/WelcomePage.js
import React from 'react';

function WelcomePage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container text-center py-5 flex-grow-1">
        <h2>Welcome to the Dashboard!</h2>
        <p className="lead">You are successfully logged in.</p>
      </div>
    </div>
  );
}

export default WelcomePage;

