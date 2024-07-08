import { searchMovies } from '../services/movies'
import { useRef, useState } from "react";

export function UseMovies({ search }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)


    const getMovie = async () => {
        if (search === previousSearch.current) return
        try {
            setLoading(true)
            setError(null)
            const NewMovies = await searchMovies({ search })
            previousSearch.current = search
            setMovies(NewMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    return { movies, loading, getMovie };
}
