// import React from 'react'
import MoviesList from "./Popular";
function Popular() {
  return (
    <div>
        <div className="popular">
              <div>
                <section className="popular container">
                    <div className="scroll-my-24" id="popular">
                        <div className="heading" >
                            <h2 className="heading-title">Popular Movies</h2>
                        </div>
                          <div className="swiper">
                              {/* <SliderMovies/> */}
                              <MoviesList url="/popular"/>
                          </div>
                    </div>
                </section>
              </div>
            </div>
    </div>
  )
}

export default Popular;