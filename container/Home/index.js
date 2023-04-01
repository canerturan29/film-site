import React from 'react'
import Movies from "@/mocs/movies.json"
import Genres from "@/mocs/genres.json"
import FeaturedMovie from '@/components/Featured-Movie'
import Categories from '@/components/Categories'
import MoviesSection from '@/components/Movies-Sections'

function HomeContainer({ selectedCategory }) {
    return (
        <div>
            <FeaturedMovie movie={Movies.results[0]} />
            <Categories categories={Genres.genres.slice(0, 5)} />
            {selectedCategory.movies?.length > 0 &&
                (<MoviesSection title={Genres.genres.find(genre => `${genre.id}` === selectedCategory.id).name} movies={selectedCategory.movies} />)

            }
            <MoviesSection title="Populer Films" movies={Movies.results.slice(1, 7)} />
            <MoviesSection title="Your Favorites" movies={Movies.results.slice(7, 13)} />
        </div>
    )
}

export default HomeContainer