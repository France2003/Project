// import React from 'react'
import MoviesList from "./Popular";
function Movie() {
  return (
    <div id="movies" className="scroll-my-24">
        <div className="movies" >
            <section className="movies-container container">
                <div className="heading">
                    <h2 className="heading-title">Movies and Shows</h2>
                </div>
                <div className="movies-content">
                    <div className="swiper_movies">
                        <MoviesList url={`/now_playing`} />
                    </div>
                    <div className="swiper_movies2">
                        <MoviesList url={`/top_rated`} />
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Movie