"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Youtube from "../Youtube";

import styles from "./styles.module.css";

function FeaturedMovie({ movie = {}, videoTrailer = {}, isCompact = true }) {
    const { poster_path, title, overview } = movie;
    const trailer = videoTrailer.videos?.results.find(vid => vid.type == "Trailer")
    const [video, setVideo] = useState(false)
    const handleShow = () => {
        setVideo(true)
    }
    return (
        <div className={styles.movieWrapper}>
            <h1 className={styles.movieTitle}>{title}</h1>
            <p
                className={`${styles.overview} ${isCompact ? styles.shortOverview : ""
                    }`}
            >
                {overview}
            </p>
            {video && <Youtube videoId={trailer} />}
            <div className={styles.actionButtons}>

                <Link className={styles.playButton} href={`/movie/${movie.id}`} onClick={handleShow}>
                    Play Trailer
                </Link>

            </div>
            <div className={styles.moviePoster}>
                <div className={styles.moviePosterOverlay}></div>
                <Image
                    unoptimized
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                    fill
                />
            </div>
        </div>
    );
}


export default FeaturedMovie;