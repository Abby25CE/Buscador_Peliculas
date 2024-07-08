function ListOfMovies({ movies }) {
  return (
    <ul className="grid items-start justify-center grid-cols-6 gap-5 ">
      {movies.map((movie) => (
        <li className="text-center " key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img className="" src={movie.poster} alt={movie.Title} width={200} />
        </li>
      ))}
    </ul>
  );
}
function NoMoviesResult() {
  return <p>No se encontraron peluculas</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResult />;
}
