function CarritoSidebar({ carrito, eliminarDelCarrito, cerrar }) {
  const total = carrito.reduce((sum, item) => sum + item.price * item.cantidad, 0);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      right: 0,
      width: "400px",
      height: "100%",
      backgroundColor: "#fff",
      boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
      overflowY: "auto",
      zIndex: 1000,
      padding: "20px",
    }}>
      <button onClick={cerrar} style={{ marginBottom: "20px" }}>Cerrar</button>
      <h2>Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        carrito.map(item => (
          <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "10px", borderBottom: "1px solid #ccc", padding: "10px 0" }}>
            <img src={item.image} alt={item.title} style={{ width: "60px" }} />
            <div style={{ flex: 1 }}>
              <h4>{item.title}</h4>
              <p>${item.price} x {item.cantidad} = ${(item.price * item.cantidad).toFixed(2)}</p>
            </div>
            <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
          </div>
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default CarritoSidebar;
