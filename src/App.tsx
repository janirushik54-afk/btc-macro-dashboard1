import { useEffect, useState } from "react";
import axios from "axios";

type FearGreed = {
  value: string;
  value_classification: string;
};

function App() {
  const [btcPrice, setBtcPrice] = useState("Loading...");
  const [fearGreed, setFearGreed] = useState<FearGreed | null>(null);
  const [trend, setTrend] = useState("Loading...");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const btc = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );

      setBtcPrice("$" + btc.data.bitcoin.usd.toLocaleString());

      const fg = await axios.get("https://api.alternative.me/fng/?limit=1");

      const data = fg.data.data[0];

      setFearGreed({
        value: data.value,
        value_classification: data.value_classification,
      });

      const score = Number(data.value);

      if (score >= 60) {
        setTrend("🟢 Bullish");
      } else if (score <= 40) {
        setTrend("🔴 Bearish");
      } else {
        setTrend("🟡 Neutral");
      }
    } catch (e) {
      console.log(e);
      setBtcPrice("Error");
      setTrend("Unavailable");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "20px",
        fontFamily: "Arial",
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
          marginTop: "20px",
        }}
      >
        <h2>💰 BTC Price</h2>
        <h1>{btcPrice}</h1>
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
        <h1>
          {fearGreed
            ? `${fearGreed.value} (${fearGreed.value_classification})`
            : "Loading..."}
        </h1>
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
        <h1>{trend}</h1>
      </div>
    </div>
  );
}
export default App;
