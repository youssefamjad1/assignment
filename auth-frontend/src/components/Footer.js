// components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

