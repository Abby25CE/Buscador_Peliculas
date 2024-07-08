import { Movies } from "./components/Movies";
import { UseMovies } from "./Hooks/useMovies";
import { useEffect, useRef, useState } from "react";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede iniciar una pelicula con un numero");
      return;
    }

    if (search.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

function App() {
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovie } = UseMovies({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
    //const { query } = Object.fromEntries(new window.FormData(event.target));
    getMovie();
  };

  const handleChange = (event) => {
    updateSearch(event.target.value);
  };

  const getErrorBorder = () => {
    if (error) {
      return " border-[#FF0000]";
    } else {
      return " border-purple-500";
    }
  };

  return (
    <div className="flex flex-col items-start w-screen h-screen gap-y-5 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center justify-around w-full border-2 border-purple-500 rounded-lg h-28 bg-slate-700"
      >
        <h1 className="text-lg font-bold">Buscador de Peliculas</h1>
        <input
          onChange={handleChange}
          value={search}
          name="query"
          className={`border-2 w-2/3 px-1 py-2  rounded-lg ${getErrorBorder()} `}
          placeholder="Harry Potter, Mad Madx, Hercules...."
        />
        {error && <p className="flex font-bold text-red-950">{error}</p>}
        <button
          type="submit"
          className={`py-1 text-lg font-medium text-white bg-gray-800 border border-transparent
             rounded-lg px-7 hover:border-blue-600  focus:outline-none focus:ring-2 focus:ring-blue-600`}
        >
          Buscar
        </button>
      </form>
      <div className="mx-5 ">
        <Movies movies={movies} />
      </div>
    </div>
  );
}

export default App;
