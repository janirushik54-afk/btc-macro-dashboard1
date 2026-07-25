import Header from "./components/Header";
import MacroCard from "./components/MacroCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Header />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MacroCard title="DXY" series="DTWEXBGS" />
        <MacroCard title="Fed Rate" series="FEDFUNDS" />
        <MacroCard title="CPI" series="CPIAUCSL" />
        <MacroCard title="M2 Money Supply" series="M2SL" />
      </div>
    </div>
  );
}

export default App;
