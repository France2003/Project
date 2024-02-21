// import React from 'react'
import './index.css'
import { FiHome } from "react-icons/fi";
import { FaFireAlt } from "react-icons/fa";
// import { MdExplore } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
// import { MdFavoriteBorder } from "react-icons/md";
// import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom"
const MenuList = () => {
  return (
    <div className='menu'>
        <ul className='menuList'>
            <li>
                <div className='icon'><FiHome /></div>
                <a href="#Home">Home</a>
            </li>
            <li>
                <div className='icon'><FaFireAlt /></div>
                <a href="#popular">Trending</a>
            </li>
            <li>
                <div className='icon'><FaFireAlt /></div>
                <a href="#movies">Explore</a>
            </li>
            <li>
                <div className='icon'><BiSolidMoviePlay /></div>
                <a href="">Movies</a>
            </li>
            <li>
                <div className='icon'><BiSolidMoviePlay /></div>
                <a href="">Favorite</a>
            </li>
        </ul>
    </div>
  )
}

export default MenuList