import FeaturedMovie from "@/components/Featured-Movie";
import React from "react";

function MovieContainer({ movie, videoTrailer }) {

    return <FeaturedMovie movie={movie} videoTrailer={videoTrailer} isCompact={false} />;
}

export default MovieContainer;