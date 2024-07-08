import { searchMovies } from '../services/movies'
import { useState } from "react";

export function UseMovies({ search }) {
    const [movies, setMovies] = useState([])

    const getMovie = async () => {
        const NewMovies = await searchMovies({ search })
        setMovies(NewMovies)
    }

    return { movies, getMovie };
}
