import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from '../components/Form';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', user);
      console.log('Login response:', response); // Log response to check the status

      // Check if the login was successful
      if (response.status === 200 && response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/welcome'); // Only navigate to the welcome page if login is successful
      } else {
        // Handle case where login response is not successful but no error is thrown
        alert('Invalid credentials. Please check your email and password.');
      }
    } catch (error) {
      console.log('Login error:', error); // Log the error to understand what's happening

      // Check if the error has a response and if it's a 400 status (invalid credentials)
      if (error.response) {
        if (error.response.status === 400) {
          alert('Invalid credentials. Please check your email and password.');
        } else {
          alert('Error logging in. Please try again.');
        }
      } else {
        alert('Network error. Please try again later.');
      }
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container d-flex justify-content-center py-5 flex-grow-1">
        <div className="col-md-6">
          <Form
            title="Login"
            fields={[
              { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter your email', onChange: (e) => setEmail(e.target.value) },
              { label: 'Password', type: 'password', name: 'password', placeholder: 'Enter your password', onChange: (e) => setPassword(e.target.value) },
            ]}
            onSubmit={handleSubmit}
            buttonText="Login"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
