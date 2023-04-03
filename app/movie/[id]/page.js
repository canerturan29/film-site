

import React from "react";
import MovieContainer from "@/container/Movies";
import { getMovie } from "@/services/movie";

import { notFound } from "next/navigation"

async function MoviePage({ params, searchParams }) {
    const movieDetail = await getMovie(params.id)

    if (!movieDetail) {
        notFound()
    }

    return (<MovieContainer movie={movieDetail} />);
}

export default MoviePage;