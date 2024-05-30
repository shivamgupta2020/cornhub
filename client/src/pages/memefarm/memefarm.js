import React, { useState, useEffect } from 'react'
import './memefarm.css'
import {saveAs} from 'file-saver'
import axios from 'axios'

function Memefarm() {
  const [images, setImages] = useState([]);
  const [meme, setMeme] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);



  useEffect(() => {
    axios.get(`https://cornhub-backend.vercel.app/get-images`)
      .then((res) => setImages(res.data))
      .catch((err) => console.log(err))

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setMeme(images[randomIndex]);
  };

  const downloadMeme = () => {
    saveAs(meme, 'meme.jpg');
  }
  return (
    <div>
      <div className="memefarm">
        <div className="memefarm-container">
          <div className="generate">
            <div className="generate-text" onClick={handleClick}>GENERATE<br></br>MEME</div>
            <div className="generated-image" onClick={downloadMeme}>
              {meme && <img src={meme.link} alt="Random" />}
            </div>
          </div>
          <div className="heading">BROWSE MEME</div>
          <div className="collection">
            {images.map((image, index) => (
              <div className="image-box" key={index}>
                <img src={image.link} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Memefarm;
