import {
  Container,
  Navbar as BootstrapNavbar,
  Nav,
  Button,
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();

  const setActiveClass = ({ isActive }) =>
    isActive ? "nav-button nav-button-active" : "nav-button";

  return (
    <BootstrapNavbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="py-3 shadow-sm"
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="fw-bold">
          Pizzería Mamma Mía!
        </BootstrapNavbar.Brand>

        <Nav className="me-auto gap-2">
          <NavLink to="/" className={setActiveClass}>
            🍕 Home
          </NavLink>

          {token ? (
            <>
              <NavLink to="/profile" className={setActiveClass}>
                🔓 Profile
              </NavLink>

              <Button variant="outline-light" size="sm" onClick={logout}>
                🔒 Logout
              </Button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={setActiveClass}>
                🔐 Login
              </NavLink>

              <NavLink to="/register" className={setActiveClass}>
                🔐 Register
              </NavLink>
            </>
          )}
        </Nav>

        <Button as={Link} to="/cart" variant="outline-info" size="sm">
          🛒 Total: ${formatPrice(total)}
        </Button>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;