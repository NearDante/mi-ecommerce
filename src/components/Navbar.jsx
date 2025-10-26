import { Link } from "react-router-dom";

function Navbar({ carrito, isLoggedIn, setIsLoggedIn, abrirCarrito }) {
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <Link to="/">Productos</Link>
      <button onClick={abrirCarrito}>
        Carrito ({totalItems})
      </button>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
