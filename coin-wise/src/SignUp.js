// SignUp.js
import React, { Component } from 'react';
import './SignUp.css'; 
import Navbar from './Navbar';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Add your SignUp logic here
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
            <h2>Sign Up</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <label>
                <i>After completing the sign-up process, navigate to your profile to further configure your banking information.</i>
              </label>
              <button type="submit">Sign Up</button>
            </form>
            {this.state.error && <p className="error-message">{this.state.error}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
