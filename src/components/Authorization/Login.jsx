import { useState } from 'react';

// Login component for user login
function Login() {
  // State for form data (username and password)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update form data with the new value
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // API base URL (replace with your cohort name)
  const BASE_URL = 'https://strangers-things.herokuapp.com/api/2302-ACC-PT-WEB-PT-C';

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the login endpoint
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: formData.username,
            password: formData.password,
          },
        }),
      });

      // Parse the response as JSON
      const result = await response.json();
      console.log(result);

      if (result.success) {
        // Login successful, you can handle user authentication and navigation here
        alert('Login successful!'); // Display a success message or redirect
      } else {
        // Login failed, handle the error here
        alert('Login failed: ' + result.error.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Input fields for username and password */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {/* Submit button */}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
