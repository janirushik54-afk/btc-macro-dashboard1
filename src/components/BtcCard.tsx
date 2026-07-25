import { useEffect, useState } from "react";

function BtcCard() {
  const [price, setPrice] = useState("Loading...");

  useEffect(() => {
    async function loadPrice() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        const data = await res.json();

        setPrice("$" + data.bitcoin.usd.toLocaleString());
      } catch {
        setPrice("Error");
      }
    }

    loadPrice();
  }, []);

  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <h2 className="text-gray-400 text-sm">Bitcoin Price</h2>
      <p className="text-2xl font-bold text-green-400">{price}</p>
    </div>
  );
}

export default BtcCard;
