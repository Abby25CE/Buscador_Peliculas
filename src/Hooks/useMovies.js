import withResults from "../mocks/with-results.json";
import withoutResults from "../mocks/no-results.json";
import { useState } from "react";

export function UseMovies({ search }) {
    const [responseMovies, setResponseMovies] = useState([])

    const movies = responseMovies.Search;

    const mappedMovies = movies?.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
    }));
    //1:16:00
    const getMovie = () => {
        if (search) {
            fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=9d3a1d74&s=${search}}`)
                .then(res => res.json())
                .then(json => {
                    setResponseMovies(json)
                })
        } else {
            setResponseMovies(withoutResults)
        }
    }

    return { movies: mappedMovies, getMovie };
}
