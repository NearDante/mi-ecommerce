import { useEffect, useState } from "react";
import ProductoCard from "../components/ProductoCard";

function Productos({ agregarAlCarrito }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar productos");
        return res.json();
      })
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: "20px" }}>Cargando productos...</p>;
  if (error) return <p style={{ padding: "20px" }}>Error: {error}</p>;

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", padding: "20px" }}>
      {productos.map((p) => (
        <ProductoCard key={p.id} producto={p} agregarAlCarrito={agregarAlCarrito} />
      ))}
    </div>
  );
}

export default Productos;
