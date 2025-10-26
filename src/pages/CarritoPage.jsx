function CarritoPage({ carrito, eliminarDelCarrito }) {
  const total = carrito.reduce(
    (sum, item) => sum + item.price * item.cantidad,
    0
  );

  if (carrito.length === 0) return <p style={{ padding: "20px" }}>El carrito está vacío</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tu Carrito</h2>
      {carrito.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "1px solid #ccc",
            padding: "10px 0",
          }}
        >
          <img src={item.image} alt={item.title} style={{ width: "60px" }} />
          <div style={{ flex: 1 }}>
            <h4>{item.title}</h4>
            <p>
              ${item.price} x {item.cantidad} = ${item.price * item.cantidad}
            </p>
          </div>
          <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default CarritoPage;
