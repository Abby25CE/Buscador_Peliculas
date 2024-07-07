function ListOfMovies({ movies }) {
  return (
    <ul className="grid grid-cols-5 gap-5">
      {movies.map((movie) => (
        <li className="" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.Title} width={250} />
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
