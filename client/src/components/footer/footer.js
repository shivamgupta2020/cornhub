import React from 'react'
import logo from './logo.webp'
import './footer.css'

function Footer(props) {
    return (
        <div className="footer" style={{position:`${props.position}`}}>
            <div className="footer-container">
                
                {/* <div className="footer-option"></div> */}
                <div className="footer-bottom">
                    <div className="footer-logo">
                        <img src={logo} style={{ height: "50px" }} alt="logo" loading='lazy' />
                    </div>
                    <div className="footer-tagline">
                        <p className='footer-tagline-text'>A-maize-ing Laughs, Corn-tinuously Popping!</p>
                    </div>
                    <div className="footer-socials">
                        <div className="footer-socialicon">
                            <a href="https://x.com/Cornhubcro/" target="_blank" rel="noopener noreferrer"><img src={require("./twitter.webp")} alt="" srcset="" loading='lazy' /></a>
                        </div>
                        <div className="footer-socialicon">
                            <a href="https://t.me/+tWDMIwqW0zthNTYx" target="_blank" rel="noopener noreferrer"><img src={require("./telegram.webp")} alt="" srcset="" loading='lazy' /></a>
                        </div>
                        <div className="footer-socialicon">
                            <a href="https://discord.com/invite/VQEmnUzDKV" target="_blank" rel="noopener noreferrer"><img src={require("./discord.webp")} alt="" srcset="" loading='lazy' /></a>
                        </div>
                        <div className="footer-socialicon">
                            <a href="https://x.com/Cornhubcro/" target="_blank" rel="noopener noreferrer"><img src={require("./dexscreener.webp")} alt="" srcset="" loading='lazy' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
