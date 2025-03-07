import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from '../components/Form';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, email, password };
    console.log('Submitting user:', user); // Log the user object to check values
    try {
      const response = await axios.post('https://assignment-production-e613.up.railway.app/api/auth/register', user);
      alert(response.data.message); // Display success message from backend
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      if (error.response && error.response.data.message === "User already exists") {
        alert('This email is already registered. Please try a different one.');
      } else {
        alert('Error registering. Please try again.');
      }
      console.error(error.response?.data || error); // Log the error for debugging
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container d-flex justify-content-center py-5 flex-grow-1">
        <div className="col-md-6">
          <Form
            title="Register"
            fields={[
              {
                label: 'Name',
                type: 'text',
                name: 'name',
                placeholder: 'Enter your name',
                value: name, // Bind to state
                onChange: (e) => setName(e.target.value), // Update state on change
              },
              {
                label: 'Email',
                type: 'email',
                name: 'email',
                placeholder: 'Enter your email',
                value: email, // Bind to state
                onChange: (e) => setEmail(e.target.value), // Update state on change
              },
              {
                label: 'Password',
                type: 'password',
                name: 'password',
                placeholder: 'Enter your password',
                value: password, // Bind to state
                onChange: (e) => setPassword(e.target.value), // Update state on change
              },
            ]}
            onSubmit={handleSubmit}
            buttonText="Register"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
