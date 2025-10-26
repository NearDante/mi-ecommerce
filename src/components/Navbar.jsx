import { Link } from "react-router-dom";

function Navbar({ carrito, isLoggedIn, onLogout, toggleCarrito }) {
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <nav style={{
  display: "flex",
  alignItems: "center",
  padding: "10px 20px",
  background: "#f4f4f4",
  gap: "20px" // espacio entre todos los elementos
}}>
  <Link to="/">Productos</Link>
  <button onClick={toggleCarrito}>
    🛒 Carrito ({totalItems})
  </button>

  {isLoggedIn ? (
    <button onClick={onLogout}>Cerrar sesión</button>
  ) : (
    <Link to="/login">Iniciar sesión</Link>
  )}
</nav>

  );
}

export default Navbar;
