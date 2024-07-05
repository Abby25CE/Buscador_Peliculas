import { Movies } from "./components/Movies";
import { UseMovies } from "./Hooks/useMovies";

function App() {
  const { movies } = UseMovies();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { query } = Object.fromEntries(new window.FormData(event.target));
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <form
        onSubmit={handleSubmit()}
        className="flex flex-col items-center justify-center border-2 border-purple-500 rounded-lg w-96 h-96 gap-y-6 bg-slate-700"
      >
        <h1 className="text-lg font-bold">Buscador de Peliculas</h1>
        <input
          name="query"
          className="w-2/3 px-1 py-2 border-2 border-purple-500 rounded-lg"
          placeholder="Harry Potter, Mad Madx, Hercules...."
        />
        <button
          type="submit"
          className="py-1 text-lg font-medium text-white bg-gray-800 border border-transparent rounded-lg px-7 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Buscar
        </button>
      </form>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
