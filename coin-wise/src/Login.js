// Login.js
import React, { Component } from 'react';
import './Login.css'; // Import the CSS file

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    // Here, you can implement your login logic.
    // For this example, we'll check if both fields are filled with a sample username and password.
    if (username === 'sampleuser' && password === 'samplepassword') {
      // Redirect to a success page or perform other actions here.
      alert('Login successful!');
    } else {
      this.setState({ error: 'Invalid username or password' });
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: '' });
  };

  render() {
    return (
      <div className="container">
         <div className="form-container"> 
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div>
              <label htmlFor="username">Username</label>
            </div>
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
          <button type="submit">Login</button>
        </form>
        {this.state.error && <p className="error-message">{this.state.error}</p>}
        </div>
      </div>
    );
  }
}

export default Login;
