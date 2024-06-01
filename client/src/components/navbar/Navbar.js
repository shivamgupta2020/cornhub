import React, { useState } from 'react'
import logo from '../navbar/logo.webp'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const currentLocation = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='header'>
        <div className="container w-container">
          <div className="headermenucontainer">
            <div className="innerwrapper">
              <div className="logo">
                <img src={logo} style={{ height: "50px" }} alt="logo" />
              </div>
              <div className="social">
                <div className="socialicon">
                  <a href="https://x.com/Cornhubcro/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "15px" }}><img src={require("../navbar/twitter.webp")} alt="" srcset="" />
                    <i className="fab fa-twitter navtitle">Twitter/X</i></a>
                </div>
                <div className="socialicon">
                  <a href="https://t.me/+tWDMIwqW0zthNTYx" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "15px" }}><img src={require("../navbar/telegram.webp")} alt="" srcset="" />
                    <i className="fab fa-telegram navtitle">Telegram</i></a>
                </div>
                <div className="socialicon">
                  <a href="https://discord.com/invite/VQEmnUzDKV" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "15px" }}><img src={require("../navbar/discord.webp")} alt="" srcset="" />
                    <i className="fab fa-discord navtitle">Discord</i></a>
                </div>
                <div className="socialicon">
                  <a href="https://google.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "15px" }}><img src={require("../navbar/dexscreener.webp")} alt="" srcset="" />
                    <i className="fab fa-dexscreener navtitle">DexScreener</i></a>
                </div>
              </div>
              {/* <div className="connect">
                <button type="button" className='navconnect'>Connect</button>
              </div> */}
            </div>
          </div>
          <div className="headerwrapper">
            <div className={`pages home ${currentLocation.pathname === '/home' ? 'active' : ''}`}>
              <Link to='/home'><p className='navtitle'>Welcome to the CornField</p></Link>
            </div>
            <div className={`pages cornfield ${currentLocation.pathname === '/cornomics' ? 'active' : ''}`}>
              <Link to='/cornomics'><p className='navtitle'>Cornomics</p></Link>
            </div>
            <div className={`pages presale ${currentLocation.pathname === '/presale' ? 'active' : ''}`}>
              <Link to='/presale'><p className='navtitle'>Popcorn Pre-sale</p></Link>
            </div>
            <div className={`pages tracker ${currentLocation.pathname === '/corntracker' ? 'active' : ''}`}>
              <Link to='/corntracker'> <p className='navtitle'>Corn Tracker</p></Link>
            </div>
            <div className={`pages share ${currentLocation.pathname === '/share' ? 'active' : ''}`}>
              <Link to='/share'><p className='navtitle'>Share Your Corny Script</p></Link>
            </div>
            <div className={`pages farm ${currentLocation.pathname === '/farm' ? 'active' : ''}`}>
              <Link to='/farm'><p className='navtitle'>Meme Farms</p></Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className='mobile-header'>
        <div className='container m w-container'>
          <div className="headermenucontainer m">
            <div className="innerwrapper m">
              <div className="hamburger" onClick={toggleMenu}>
                <img src={require("./ham-menu.png")} alt="" srcset="" />
              </div>
              {isMenuOpen && (
                <div className="menu">
                  <div className="flyout">
                    <div className="flyoutinner">
                      <div className="container-fly">
                        <div className="flyoutheader">
                          <img src={logo} style={{ width: "100px", cursor: "pointer", loading: "lazy", alignSelf: "center", maxWidth: "100%" }} alt="logo" />
                          <div className="close-hamburger" onClick={toggleMenu} style={{ color: "#ff9900", width: "20px", height: "20px" }}>X
                          </div>
                        </div>
                        <ul className="flyoutmenu">
                          <Link to='/home' onClick={toggleMenu}><li className='flyoutitem'>Welcome to the Cornfield</li></Link>
                          <Link to='/cornomics' onClick={toggleMenu}><li className='flyoutitem'>Cornomics</li></Link>
                          <Link to='/presale' onClick={toggleMenu}><li className='flyoutitem'>Popcorn Pre-sale</li></Link>
                          <Link to='/corntracker' onClick={toggleMenu}><li className='flyoutitem'>Corn Tracker</li></Link>
                          <Link to='/share' onClick={toggleMenu}><li className='flyoutitem'>Share Your Corny Script</li></Link>
                          <Link to='/farm' onClick={toggleMenu}><li className='flyoutitem'>Meme Farms</li></Link>
                        </ul>
                      </div>
                    </div>
                    <div className="flyoutouter"></div>
                  </div>
                </div>
              )}
              <div className="logo m">
                <img src={logo} style={{ height: "25px" }} alt="logo" />
              </div>
              <div className="connect m">
                <button type="button" className='navconnect'>Connect</button>
              </div>
            </div>
          </div>
          <div className="headerwrapper m">
            <div className="socialicon">
              <a href="https://www.twitter.com/Cornhubcro"><i className="navtitle m">Twitter/X</i></a>
            </div>
            <div className="socialicon">
              <a href="https://t.me/+tWDMIwqW0zthNTYx"><i className="navtitle m">Telegram</i></a>
            </div>
            <div className="socialicon">
              <a href="https://www.discord.gg/VQEmnUzDKV"><i className="navtitle m">Discord</i></a>
            </div>
            <div className="socialicon">
              <a href="https://www.twitter.com"><i className="navtitle m">DexScreener</i></a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
