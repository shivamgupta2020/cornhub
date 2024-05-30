import React from 'react'
import logo from './logo.webp'
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
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
                            <img src={require("./twitter.webp")} alt="" srcset="" loading='lazy'/>
                        </div>
                        <div className="footer-socialicon">
                            <img src={require("./telegram.webp")} alt="" srcset="" loading='lazy'/>
                        </div>
                        <div className="footer-socialicon">
                            <img src={require("./discord.webp")} alt="" srcset="" loading='lazy'/>
                        </div>
                        <div className="footer-socialicon">
                            <img src={require("./dexscreener.webp")} alt="" srcset="" loading='lazy'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
