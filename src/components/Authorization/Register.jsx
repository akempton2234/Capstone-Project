import { useState } from 'react';

// Register component for user registration
function Register() {
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
      // Send a POST request to the registration endpoint
      const response = await fetch(`${BASE_URL}/users/register`, {
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
        // Registration successful, you can handle user authentication and navigation here
        alert('Registration successful!'); // Display a success message or redirect
      } else {
        // Registration failed, handle the error here
        alert('Registration failed: ' + result.error.message);
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Register</h2>
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
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
