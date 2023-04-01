import FeaturedMovie from "@/components/Featured-Movie";
import React from "react";

function MovieContainer({ movie }) {
    return <FeaturedMovie movie={movie} isCompact={false} />;
}

export default MovieContainer;