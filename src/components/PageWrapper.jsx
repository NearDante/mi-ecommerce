export default function PageWrapper({ children }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      width: "100%",
      padding: "20px",
      boxSizing: "border-box"
    }}>
      {children}
    </div>
  );
}
