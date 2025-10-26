import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Productos from "./pages/Productos";
import DetalleProducto from "./components/DetalleProducto";
import Login from "./pages/Login";
import CarritoSidebar from "./components/CarritoSidebar";

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

  return (
    <Router>
      <Navbar
        carrito={carrito}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        abrirCarrito={() => setCarritoAbierto(true)}
      />

      <Routes>
        <Route path="/" element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
        <Route
          path="/producto/:id"
          element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Sidebar flotante */}
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
