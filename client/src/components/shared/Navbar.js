import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const renderNavItems = () => {
    if (user) {
      return (
        <>
          <Link to="/account">
            <li>Account</li>
          </Link>
          <li onClick={logout}>Logout</li>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
        </>
      );
    }
  };
  return (
    <>
      <nav>
        <ul style={{display:'flex'}}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/available">
            <li>Available</li>
          </Link>
          <Link to="/cities">
            <li>Cites</li>
          </Link>
          <Link to="/city_cost">
            <li>City Cost</li>
          </Link>
          <Link to="/buyers">
            <li>Buyers</li>
          </Link>
          <Link to="/hooks">
            <li>Hooks Demo</li>
          </Link>
          {renderNavItems()}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
