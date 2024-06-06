import React, { useEffect, useState } from 'react';
import './home.css';
import axios from 'axios';
import Footer from '../../components/footer/footer';

function Home() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
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

    const fetchVideos = async () => {
        try {
            const res = await axios.get('https://cornhub-backend.vercel.app/get-video');
            setVideos(res.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    const updateVideoLikes = (videoId, newLikes) => {
        setVideos(prevVideos => prevVideos.map(video =>
            video._id === videoId ? { ...video, like: newLikes } : video
        ));
    };

    return (
        <div>
            <div className="home-div">
                <div className="home-container">
                    <div className="home-text">
                        <div className="line1">
                            <p>Hottest ticker on Cronos is</p>
                            <div className="cornhub">$CORNHUB</div>
                        </div>
                        <p>CA: TBA</p>
                    </div>
                    <div className="hot-videos">
                        <p>Hot Videos on Cronos</p>
                        <img src={require("./cronos.png")} alt="" />
                    </div>
                    <div className="videos">
                        {loading
                            ? Array.from({ length: 8 }).map((_, index) => <LoadingPlaceholder key={index} />)
                            : [...videos].reverse().map((video) => (
                                <div className="home-box" key={video.link} onClick={() => openModal(video)}>
                                    <div className="home-box-top">
                                        <img src={`https://img.youtube.com/vi/${video.link}/0.jpg`} alt="" loading='lazy' />
                                    </div>
                                    <div className="home-box-bottom">
                                        <div className="line">
                                            <div className="line-left">
                                                <p>Cornhub</p>
                                                <img src={require("./tick.png")} alt="" />
                                            </div>
                                            <div className="line-right">
                                                <img src={require('./like.png')} alt="" />
                                                <p>{video.like}</p>
                                            </div>
                                        </div>
                                        <p>{video.title}</p>
                                    </div>
                                </div>
                            ))}
                        {isModalOpen && <Modal video={currentVideo} onClose={closeModal} updateLikes={updateVideoLikes} />}
                    </div>
                    <div className="banner" style={{display:"flex", flexShrink:"1", margin:"20px 0"}}>
                        <img src={require("./banner.webp")} alt="" style={{objectFit:"cover", width:"100%"}}/>
                    </div>
                    <div className="footer-text">
                        The content on this website is for fun,entertainment and informational purpose only and is not intended as financial advice. Cryptocurrency investments are subject to high market risks and volatility. Readers are advised to conduct their own research or consult with a professional financial advisor before making any investment decisions. Meme coin investments are subject to high volatility and market risk. Cornhub will not be liable for any financial losses incurred based on information presented here.                    </div>
                </div>
            </div>
            <Footer position="relative" />
        </div>

    );
}

const LoadingPlaceholder = () => (
    <div className="home-box placeholder">
        <div className="home-box-top">
            <div className="placeholder-img"></div>
        </div>
        <div className="home-box-bottom">
            <div className="line">
                <div className="line-left">
                    <p className="placeholder-text">Loading...</p>
                    <div className="placeholder-img-small"></div>
                </div>
                <div className="line-right">
                    <div className="placeholder-img-small"></div>
                    <p className="placeholder-text">...</p>
                </div>
            </div>
            <p className="placeholder-text">Loading title...</p>
        </div>
    </div>
);

const Modal = ({ onClose, video, updateLikes }) => {
    const [likes, setLikes] = useState(video.like);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleLikeClick = async () => {
        const newLikes = likes + 1;
        setLikes(newLikes);

        try {
            await axios.put(`https://cornhub-backend.vercel.app/update-video/${video._id}`, {
                like: newLikes
            });
            updateLikes(video._id, newLikes); // Update likes in the Home component
        } catch (error) {
            console.error('Error updating likes in database:', error);
        }
    };

    const handleCopyClick = () => {
        navigator.clipboard.writeText("Your text to copy here")
            .then(() => alert('Text copied to clipboard'))
            .catch(err => console.error('Could not copy text: ', err));
    };

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${video.link}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="line2">
                    <div className="line2-left">
                        <p style={{ fontSize: "25px" }} id='tille'>{video.title}</p>
                        <p style={{ fontSize: "15px" }} id='creator'>Creator - Cornhub</p>
                    </div>
                    <div className="line2-right">
                        <div className="line2-right-top" onClick={handleLikeClick}>
                            <img src={require('./like_unfill.png')} style={{ width: "30px", height: "30px" }} id='like_button' />
                            <p id='like'>{`Like (${likes})`}</p>
                        </div>
                        <div className="line2-right-bottom"
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}>
                            <p style={{ textAlign: "end" }}>Tip Creator</p>
                            {showTooltip && (
                                <div className="tooltip">
                                    <p>add address here</p>
                                    <button onClick={handleCopyClick}>Copy</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="line3">
                    <div className="panel-socials">
                        <div className="panel-socialicon">
                            <a href={`${video.share_link}`}><img src={require("./twitter.webp")} alt="" /></a>
                        </div>
                        <div className="panel-socialicon">
                            <a href="https://t.me/+tWDMIwqW0zthNTYx"><img src={require("./telegram.webp")} alt="" /></a>
                        </div>
                        <div className="panel-socialicon">
                            <a href="https://discord.com/invite/VQEmnUzDKV"><img src={require("./discord.webp")} alt="" /></a>
                        </div>
                        <div className="panel-socialicon">
                            <img src={require("./dexscreener.webp")} alt="" />
                        </div>
                    </div>
                    <div className="close">
                        <p onClick={onClose}>Close</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
