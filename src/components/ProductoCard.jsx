import { Link } from "react-router-dom";

function ProductoCard({ producto, agregarAlCarrito }) {
  return (
    <Link to={`/producto/${producto.id}`} style={{ textDecoration: "none", color: "inherit" }}>
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
        <img
          src={producto.image}
          alt={producto.title}
          style={{ width: "100%", height: "150px", objectFit: "contain", marginBottom: "10px" }}
        />
        <h4 style={{ fontSize: "14px", textAlign: "center" }}>{producto.title}</h4>
        <p style={{ fontWeight: "bold" }}>${producto.price}</p>
      </div>
    </Link>
  );
}

export default ProductoCard;
