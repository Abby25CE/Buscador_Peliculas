function ListOfMovies({ movies }) {
  return (
    <ul className="h-screen">
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.Title} />
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
