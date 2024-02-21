// import React from 'react'
// import MenuList from "./Menu"
import './main.css'
import { FiPlay } from "react-icons/fi";
function HomePage() {
  return (
    <>
        <div className="bgr" id='Home'>
            <img src="https://movie-site-delta.vercel.app/img/home-background.png" alt="" />
        </div>
            <div className="bgr_text">
                <h1 className="bgr_title">Hitman's Wife's <br/>Bodyguard</h1>
                <p>Releasing 23 july</p>
                <a href="#" className="watch-btn">
                    <i className="play"><FiPlay /></i>
                    <span>Watch the trailler</span>
                </a>
            </div>
    </>
  )
}

export default HomePage