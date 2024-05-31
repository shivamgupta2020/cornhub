import React, { useEffect, useState } from 'react';
import './share.css';
import axios from 'axios';
import Footer from '../../components/footer/footer';

function Share() {
  const [stories, setStories] = useState([]);
  const [newStory, setNewStory] = useState('');
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = () => {
    axios.get('https://cornhub-backend.vercel.app/get-comment')
      .then((res) => {
        setStories(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handlePostStory = () => {
    if (newStory.trim()) {
      setPosting(true);
      axios.post('https://cornhub-backend.vercel.app/post-comment', { comment: newStory })
        .then((res) => {
          setNewStory(''); // Clear the textarea
          fetchStories(); // Fetch updated stories after posting
        })
        .catch((err) => console.log(err))
        .finally(() => setPosting(false));
    }
  };

  return (
    <div>
      <div className="share">
        <div className="share-container">
          <div className="share-container-top">
            <div className="share-container__title"><h3>Share Your Corny Story</h3></div>
            <div className="story-input">
              <textarea
                className="story-input__text"
                placeholder="Tell us your story..."
                value={newStory}
                onChange={(e) => setNewStory(e.target.value)}
                disabled={posting} // Disable the textarea while posting
              ></textarea>
            </div>
            <div className="story-post-button">
              <button
                className="story-post-button__button"
                onClick={handlePostStory}
                disabled={posting} // Disable the button while posting
              >
                {posting ? 'Posting...' : 'Post'}
              </button>
            </div>
          </div>
          <div className="share-container-bottom">
            <h3 style={{ color: "#f90" }}>Some Corny Stories</h3>
            <div className="story">
              {loading ? (
                <p>Loading stories...</p>
              ) : (
                stories.map((story, index) => (
                  <div className="story-item" key={index}>
                    <div className="story-item__text">{story.comment}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer position="absolute"/>
    </div>
  );
}

export default Share;
