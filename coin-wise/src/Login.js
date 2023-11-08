// Login.js
import React, { Component } from 'react';
import './Login.css'; 
import Navbar from './Navbar'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    // Here we can implement your login logic.
    if (email === 'sample@example.com' && password === 'samplepassword') {
      // Redirect to a success page or perform other actions here.
      alert('Login successful!');
    } else {
      this.setState({ error: 'Invalid email or password' });
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: '' });
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="container">
          <div className="form-container">
            <h2>Sign In</h2>
            <div className="icon-container-outter">
              <div className="icon-container-inner">
                <FontAwesomeIcon icon={faIdCard} size="10x" style={{ color: 'grey' }}/>
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <div>
                  <label htmlFor="password">Password</label>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <Link to="/dashboard"><button type="submit" >Sign in</button></Link>
            </form>
            {this.state.error && <p className="error-message">{this.state.error}</p>}
            <div className="additional-links">
              <a href="#forgot-password"> Forgot Password </a>
              <a href="#sign-up">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
