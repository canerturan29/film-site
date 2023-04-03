import React from 'react'

import FeaturedMovie from '@/components/Featured-Movie'
import Categories from '@/components/Categories'
import MoviesSection from '@/components/Movies-Sections'

function HomeContainer({ topRatedMovies = [], popularMovies = [], categories = [], selectedCategory }) {
    return (
        <div>
            <FeaturedMovie movie={topRatedMovies?.[0]} />
            <Categories categories={categories.slice(0, 5)} />
            {selectedCategory.movies?.length > 0 &&
                (<MoviesSection title={categories.find(genre => `${genre.id}` === selectedCategory.id).name} movies={selectedCategory.movies} />)

            }
            <MoviesSection title="Populer Films" movies={topRatedMovies.slice(1, 7)} />
            <MoviesSection title="Your Favorites" movies={popularMovies.slice(7, 13)} />
        </div>
    )
}

export default HomeContainer