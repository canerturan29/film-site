

import React from "react";
import MovieContainer from "@/container/Movies";
import Movies from "@/mocs/movies.json"
import { notFound } from "next/navigation"


function MoviePage({ params, searchParams }) {
    const movieDetail = Movies.results.find((movie) => movie.id.toString() === params.id)

    if (!movieDetail) {
        notFound()
    }
    if (searchParams.error === "true") {
        throw new Error("Error happened")
    }
    return (<MovieContainer movie={movieDetail} />);
}

export default MoviePage;