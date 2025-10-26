function Carrito({ carrito }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        carrito.map((p, index) => (
          <div key={index}>
            {p.nombre} - ${p.precio}
          </div>
        ))
      )}
    </div>
  );
}

export default Carrito;
