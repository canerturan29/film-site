import React from "react";

import FeatureMovieLoading from "@/components/Featured-Movie/loading.js";
import CategoriesLoading from "@/components/Categories/loading.js";
import MoviesSectionLoading from "@/components/Movies-Sections/loading.js";

function HomeLoading() {
    return (
        <>
            <FeatureMovieLoading />
            <CategoriesLoading />
            <MoviesSectionLoading />
            <MoviesSectionLoading />
            <MoviesSectionLoading />
        </>
    );
}

export default HomeLoading;