function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center" }}>🚀 BTC Macro Dashboard</h1>
      <p style={{ textAlign: "center", color: "#94a3b8" }}>
        Professional Bitcoin Macro Analysis
      </p>

      <div
        style={{
          display: "grid",
          gap: "16px",
          marginTop: "30px",
        }}
      >
        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px" }}>
          <h2>💰 BTC Price</h2>
          <h3>$--,--</h3>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px" }}>
          <h2>😨 Fear & Greed</h2>
          <h3>Loading...</h3>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "12px" }}>
          <h2>📈 Market Trend</h2>
          <h3>Neutral</h3>
        </div>
      </div>
    </div>
  )
}

export default App
