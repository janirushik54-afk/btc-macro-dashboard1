import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Header />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-gray-800 rounded-xl p-4">
          <h2 className="text-gray-400 text-sm">Bitcoin Price</h2>
          <p className="text-2xl font-bold">$--</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-4">
          <h2 className="text-gray-400 text-sm">Fear & Greed</h2>
          <p className="text-2xl font-bold">--</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-4">
          <h2 className="text-gray-400 text-sm">DXY</h2>
          <p className="text-2xl font-bold">--</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-4">
          <h2 className="text-gray-400 text-sm">Fed Rate</h2>
          <p className="text-2xl font-bold">--</p>
        </div>
      </div>
    </div>
  );
}

export default App;
