import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
import Hook from './Hook'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null); //ref for linksContainerClass
  const linksRef = useRef(null);  // ref for links class
  const callShowLinks = () => {
    setShowLinks(!showLinks)
  }

  useEffect (()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`
    }else{
       linksContainerRef.current.style.height = `0px`;
    }

  },[showLinks]) //when the button is clicked


  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" />

            <button className="nav-toggle" onClick={callShowLinks}>
              <FaBars />
            </button>
          </div>

          {/* <div
            className={`${
              showLinks ? 'links-container show-container' : 'links-container'
            }`}
          > */}
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {/* <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">account</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li> */}

              {links.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <a href="#">{text}</a>
                  </li>
                )
              })}
            </ul>
          </div>

          <ul className="social-icons">
            {/* <li>
            <a href="https://www.twitter.com"></a>
            <FaTwitter />
          </li>
          <li>
            <a href="https://www.twitter.com"></a>
            <FaTwitter />
          </li>
          <li>
            <a href="https://www.twitter.com"></a>
            <FaTwitter />
          </li> */}
            {social.map((icons) => {
              const { id, url, icon } = icons
              return (
                <li>
                  <a href={url}></a>
                  {icon}
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
      {/* <Hook /> */}
    </>
  )
}

export default Navbar
