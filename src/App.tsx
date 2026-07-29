import { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [btc, setBtc] = useState("--");
  const [fear, setFear] = useState("--");
  const [dxy, setDxy] = useState("--");
  const [fed, setFed] = useState("--");

  useEffect(() => {
    async function load() {
      try {
        const btcRes = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        setBtc("$" + btcRes.data.bitcoin.usd);

        const fearRes = await axios.get(
          "https://api.alternative.me/fng/"
        );
        setFear(fearRes.data.data[0].value);

        const dxyRes = await axios.get("/api/fred?series=DTWEXBGS");
setDxy(dxyRes.data.observations[dxyRes.data.observations.length - 1].value);

        const fedRes = await axios.get("/api/fred?series=FEDFUNDS");
setFed(fedRes.data.observations[fedRes.data.observations.length - 1].value);
      } catch (e) {
        console.log(e);
      }
    }

    load();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Header />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

        <div className="bg-gray-800 rounded-xl p-4">
          <h2>Bitcoin Price</h2>
          <p className="text-2xl font-bold">{btc}</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-4">
          <h2>Fear & Greed</h2>
          <p className="text-2xl font-bold">{fear}</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-4">
          <h2>DXY</h2>
          <p className="text-2xl font-bold">{dxy}</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-4">
          <h2>Fed Rate</h2>
          <p className="text-2xl font-bold">{fed}</p>
        </div>

      </div>
    </div>
  );
}

export default App;
