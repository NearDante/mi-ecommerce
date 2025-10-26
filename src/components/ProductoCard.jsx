import { Link } from "react-router-dom";

function ProductoCard({ producto, agregarAlCarrito }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        width: "180px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Imagen y título van al detalle */}
      <Link
        to={`/producto/${producto.id}`}
        style={{ textDecoration: "none", color: "inherit", width: "100%" }}
      >
        <img
          src={producto.image}
          alt={producto.title}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />
        <h4 style={{ fontSize: "14px", textAlign: "center" }}>
          {producto.title}
        </h4>
        <p style={{ fontWeight: "bold" }}>${producto.price}</p>
      </Link>

      {/* Botón para agregar al carrito */}
      <button
        onClick={(e) => {
          e.preventDefault(); // evita que el click active el Link
          agregarAlCarrito(producto);
        }}
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductoCard;
