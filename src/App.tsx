import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [price, setPrice] = useState<string>("Loading...");

  useEffect(() => {
    const loadPrice = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );

        setPrice("$" + res.data.bitcoin.usd.toLocaleString());
      } catch (err) {
        setPrice("API Error");
      }
    };

    loadPrice();
    const timer = setInterval(loadPrice, 60000);

    return () => clearInterval(timer);
  }, []);

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
          background: "#1e293b",
          padding: "24px",
          borderRadius: "12px",
          marginTop: "30px",
        }}
      >
        <h2>💰 BTC Price</h2>
        <h1>{price}</h1>
      </div>

      <div
        style={{
          background: "#1e293b",
          padding: "24px",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      >
        <h2>😨 Fear & Greed</h2>
        <h2>Coming Soon</h2>
      </div>

      <div
        style={{
          background: "#1e293b",
          padding: "24px",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      >
        <h2>📈 Market Trend</h2>
        <h2>Neutral</h2>
      </div>
    </div>
  );
}

export default App;
