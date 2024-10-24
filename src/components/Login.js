import React, { useContext, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the Login.css
import logo from '../assets/right2rise-logo.jpg'; // Ensure you have the logo in assets

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const idToken = credentialResponse.credential;

      // Send the ID token to the backend for verification
      const response = await axios.post('http://35.233.177.207:5000/api/auth/google', {
        token: idToken,
      });

      if (response.data.success) {
        // Store the received token (e.g., JWT) in context
        console.log('Successfully logged in!')
        login(response.data.token);
        // Redirect to Dashboard after successful login
        navigate('/dashboard');
      } else {
        console.error('Authentication failed:', response.data.message);
        setError(response.data.message || 'Authentication failed.');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      setError('An error occurred during authentication. Please try again.');
    }
  };

  const handleLoginError = () => {
    console.error('Login Failed');
    setError('Google Login Failed. Please try again.');
  };

  return (
    <div className="login-container">
      <header className="logo-header">
        <img src={logo} alt="Right2Rise Logo" className="logo" />
      </header>
      <div className="login-box">
        <h2>Welcome to Right2Rise</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
          render={(renderProps) => (
            <button className="google-login-button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
              Sign in with Google
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default Login;
