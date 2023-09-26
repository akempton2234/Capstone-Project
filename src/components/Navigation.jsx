import { Link } from 'react-router-dom';

// Functional component for rendering navigation links
const Navigation = () => {
  return (
    <nav>
      <ul>
        {/* Navigation link to the Register page */}
        <li>
          <Link to="/register">Register</Link>
        </li>
        
        {/* Navigation link to the Login page */}
        <li>
          <Link to="/login">Login</Link>
        </li>
    
        {/* Navigation link to the Products page (typically the home page) */}
        <li>
          <Link to="/">Products</Link>
        </li>
        
        {/* Navigation link to the Cart page */}
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
