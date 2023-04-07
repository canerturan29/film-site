

import React from "react";
import MovieContainer from "@/container/Movies";
import { getMovie, getMovieVideo } from "@/services/movie";

import { notFound } from "next/navigation"

async function MoviePage({ params, searchParams }) {
    const movieDetail = await getMovie(params.id)
    const movieTrailer = await getMovieVideo(params.id)


    if (!movieDetail) {
        notFound()
    }
    if (!movieTrailer) {
        notFound()
    }
    return (<MovieContainer movie={movieDetail} videoTrailer={movieTrailer} />);
}

export default MoviePage;