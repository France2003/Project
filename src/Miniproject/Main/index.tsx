// import React from 'react'

import MenuList from "./Menu"
import './main.css'
// import { FiPlay } from "react-icons/fi";
// import MoviesList from "./Popular";
import Popular from "./ppl";
import Movie from "./Movie";
import HomePage from "./HomePage";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Helmet } from "react-helmet";
// import SliderMovies from "./Slide";
const Main = () => {
  return (
    <div className="tonggle_Main">
        <div className="list_1">
          <MenuList/>
        </div>
        <div className="main">
            <HomePage/>
            <Popular/>
            <Movie/>
        </div>
        <div className="next-page">
          <a href="#" className="next-btn">Next Page</a>
        </div>
    </div>
  )
}

export default Main