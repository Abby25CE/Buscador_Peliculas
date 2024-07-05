import "./App.css";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form className="rounded-lg w-96 h-96 border-2 border-purple-500 flex flex-col justify-center items-center gap-y-6">
        <input
          className="w-2/3 rounded-lg border-2 py-2 px-1 border-purple-500"
          placeholder="Harry Potter, Mad Madx, Hercules...."
        />
        <button className="rounded-lg border border-transparent px-7 py-1 text-lg font-medium text-white bg-gray-800 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
          Buscar
        </button>
      </form>
    </div>
  );
}

export default App;
