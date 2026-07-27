import { useEffect, useState } from "react";
import { getFredLatest } from "../services/fred";

type Props = {
  title: string;
  series: string;
};

function MacroCard({ title, series }: Props) {
  const [value, setValue] = useState("Loading...");

  useEffect(() => {
    async function loadData() {
      try {
        const result = await getFredLatest(series);
        setValue(result);
      } catch (e)  {cansole.error(e);
      setValue(staring(e));
   }
    }

    loadData();
  }, [series]);

  return (
    <div className="bg-gray-800 rounded-xl p-4">
      <h2 className="text-gray-400 text-sm">{title}</h2>
      <p className="text-2xl font-bold text-cyan-400">{value}</p>
    </div>
  );
}

export default MacroCard;
