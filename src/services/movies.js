const APIURL = `https://www.omdbapi.com/?i=tt3896198&apikey=9d3a1d74&s=`

export const searchMovies = async ({ search }) => {
    if (search === '')
        return null;
    try {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=9d3a1d74&s=${search}}`)
        const json = await response.json()

        const movies = json.Search;

        return movies?.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
        }));

    } catch (e) {
        throw new Error('Error searching Movies')
    }


}