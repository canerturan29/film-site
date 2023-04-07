const API_URL = "https://api.themoviedb.org/3"
const fetchMovieApi = async (pathName, query = "") => {
    try {
        const res = await fetch(
            `${API_URL}${pathName}?api_key=${process.env.API_KEY}&${query ?? ""}`)
        return res.json()
    }
    catch (error) {
        throw new Error(error)
    }

}
const getTopRatedMovies = async () => {
    return fetchMovieApi("/movie/top_rated", "language=en-US&page=1")

}
const getPopularMovies = async () => {
    return fetchMovieApi("/movie/popular", "language=en-US&page=1")


}
const getCategories = async () => {
    return fetchMovieApi("/genre/movie/list", "language=en-US&page=1")
}
const getSingleCategory = async (genreId) => {
    return fetchMovieApi("/discover/movie", `with_genres=${genreId}`)

}
const getMovie = async (movieId) => {
    return fetchMovieApi(`/movie/${movieId}`,)

}
const getMovieVideo = async (movieId) => {
    return fetchMovieApi(`/movie/${movieId}`, "append_to_response=videos")
}
export {
    fetchMovieApi,
    getTopRatedMovies,
    getPopularMovies,
    getCategories,
    getSingleCategory,
    getMovie,
    getMovieVideo
}