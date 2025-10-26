import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Login from "./pages/Login";
import CarritoSidebar from "./components/CarritoSidebar";
import PageWrapper from "./components/PageWrapper";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCarrito([]);
    setCarritoAbierto(false);
  };

  const toggleCarrito = () => {
    if (!isLoggedIn) {
      alert("Debes iniciar sesión para ver el carrito");
      return;
    }
    setCarritoAbierto((prev) => !prev);
  };

  return (
    <Router>
    <Navbar
      carrito={carrito}
      isLoggedIn={isLoggedIn}
      onLogout={handleLogout}
      toggleCarrito={toggleCarrito}
    />

    <Routes>
      <Route path="/" element={<PageWrapper><Productos agregarAlCarrito={agregarAlCarrito} /></PageWrapper>} />
      <Route path="/producto/:id" element={<PageWrapper><DetalleProducto agregarAlCarrito={agregarAlCarrito} /></PageWrapper>} />
      <Route path="/login" element={<PageWrapper><Login setIsLoggedIn={setIsLoggedIn} /></PageWrapper>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

    {carritoAbierto && (
      <CarritoSidebar
        carrito={carrito}
        eliminarDelCarrito={eliminarDelCarrito}
        cerrar={() => setCarritoAbierto(false)}
      />
    )}
  </Router>
  );
}

export default App;
