import React, { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios'

function Home() {
    const [videos, setVideos] = useState([])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const openModal = (video) => {
        setCurrentVideo(video);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideo(null);
    };


    useEffect(() => {
        axios.get(`https://cornhub-backend.vercel.app/get-video`)
            .then((res) => setVideos(res.data))
            .catch((err) => console.log(err))
    }, [])


    return (
        <div>
            <div className="home-div">
                <div className="home-container">
                    <div className="home-text">
                        <div className="line1"><p>Hottest ticker on Cronos is</p><div className="cornhub">$CORNHUB</div></div>
                        <p>CA: TBA</p>
                    </div>
                    <div className="hot-videos">
                        <p>Hot Videos on Cronos</p>
                        <img src={require("./cronos.png")} alt="" srcset="" />
                    </div>
                    <div className="videos">
                        {videos.map((video) => (
                            <div className="home-box" onClick={() => openModal(video)}>
                                <div className="home-box-top">
                                    <img src={`https://img.youtube.com/vi/${video.link}/0.jpg`} alt="" loading='lazy' />
                                </div>
                                <div className="home-box-bottom">
                                    <div className="line">
                                        <div className="line-left">
                                            <p>Cornhub</p>
                                            <img src={require("./tick.png") } alt="" srcset="" />
                                        </div>
                                        <div className="line-right" >
                                            <img src={require('./like.png')} alt="" srcset="" />
                                            <p>{video.like}</p>
                                        </div>
                                    </div>
                                    <p>{video.title}</p>
                                </div>
                            </div>

                        ))}
                        {isModalOpen && <Modal video={currentVideo} onClose={closeModal} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
const Modal = ({ onClose, video }) => (
    <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${video.link}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="line2">
                <div className="line2-left">
                    <p style={{ fontSize: "25px" }} id='tille'>{video.title}</p>
                    <p style={{ fontSize: "15px" }} id='creator'>Creator - Cornhub</p>
                </div>
                <div className="line2-right">
                    <div className="line2-right-top">
                        <img src={require('./like_unfill.png')} style={{ width: "30px", height: "30px" }} id='like_button' />
                        <p id='like'>{`Like (${video.like})`}</p>
                    </div>
                    <div className="line2-right-bottom">
                        <p style={{ textAlign: "end" }}>Tip Creator</p>
                    </div>
                </div>
            </div>
            <div className="line3">
                <div className="panel-socials">
                    <div className="panel-socialicon">
                        <img src={require("./twitter.webp")} alt="" srcset="" />
                    </div>
                    <div className="panel-socialicon">
                        <img src={require("./telegram.webp")} alt="" srcset="" />
                    </div>
                    <div className="panel-socialicon">
                        <img src={require("./discord.webp")} alt="" srcset="" />
                    </div>
                    <div className="panel-socialicon">
                        <img src={require("./dexscreener.webp")} alt="" srcset="" />
                    </div>
                </div>
                <div className="close">
                    <p onClick={onClose}>Close </p>
                </div>

            </div>
        </div>
    </div>
);


export default Home
