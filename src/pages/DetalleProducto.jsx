import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetalleProducto({ agregarAlCarrito }) {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Producto no encontrado");
        return res.json();
      })
      .then((data) => {
        setProducto(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={{ padding: "20px" }}>Cargando producto...</p>;
  if (error) return <p style={{ padding: "20px" }}>Error: {error}</p>;

  return (
    <div className="detalle-container">
      <img
        src={producto.image}
        alt={producto.title}
        style={{ width: "300px", objectFit: "contain" }}
      />
      <div>
        <h2>{producto.title}</h2>
        <p style={{ fontWeight: "bold" }}>${producto.price}</p>
        <p>{producto.description}</p>
        <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default DetalleProducto;
