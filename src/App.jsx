import { Movies } from "./components/Movies";
import { UseMovies } from "./Hooks/useMovies";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const { movies } = UseMovies();
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    //const { query } = Object.fromEntries(new window.FormData(event.target));
    console.log({ query });
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (query === "") {
      setError("No se puede buscarr una pelicula vacia");
      return;
    }

    if (query.match(/^\d+$/)) {
      setError("No se puede iniciar una pelicula con un numero");
      return;
    }

    if (query.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [query]);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center border-2 border-purple-500 rounded-lg w-96 h-96 gap-y-6 bg-slate-700"
      >
        <h1 className="text-lg font-bold">Buscador de Peliculas</h1>
        <input
          onChange={handleChange}
          value={query}
          name="query"
          className="w-2/3 px-1 py-2 border-2 border-purple-500 rounded-lg"
          placeholder="Harry Potter, Mad Madx, Hercules...."
        />
        {error && <p className="font-bold text-red-950">{error}</p>}
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
