import React, { useState } from 'react';
import './warning.css'; // Create and import the CSS file
import { Link } from 'react-router-dom';

const WarningBox = () => {
    return (
        <div className="warning">
            <div className="warning-content">
                <div className='title'><h1>Corn</h1><h1 className='hub'>HUB</h1>
                </div>
                <h2>A-maize-ing Laughs, Corn-tinuously Popping!</h2>
                <p>
                    Ready to shuck and chuckle with the funniest crypto memes on the Cronos chain? Dive into our corn-tastic humor and real Cronos chain events, all without any adult material—we keep it corny, not naughty!
                </p>
                <div className="button-container">
                    <Link to="/home"><button className="confirm-button" style={{fontFamily:"Skribble"}}>
                        YES, I'M CORNY!
                    </button></Link>
                    <Link to="/home"><button className="exit-button" style={{fontFamily:"Skribble"}}>
                        Yes, But Chill
                    </button></Link>
                </div>
                <p>
                    By entering, you confirm that you’re a true degen, ready to join our husky community and laugh your cobs off.
                </p>
                <p>Powered by Beta Mascots</p>
                <p>2024 - ∞</p>
            </div>
        </div>
    );
};

export default WarningBox;
