import React, {useEffect, useState} from 'react'
import './share.css'
import axios from 'axios'

function Share() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/get-comment`)
      .then((res) => setStories(res.data))
      .catch((err) => console.log(err))
  },[])

  return (
    <div>
      <div className="share">
        <div className="share-container">
          <div className="share-container-top">
            <div className="share-container__title"><h3> Share Yur Corny Story</h3></div>
            <div className="story-input">
              <textarea className="story-input__text" placeholder="Tell us your story..."></textarea>
            </div>
            <div className="story-post-button">
              <button className="story-post-button__button">Post</button>
            </div>
          </div>
          <div className="share-container-bottom">
            <h3 style={{color:"#f90"}}>Some Corny Stories</h3>
            <div className="story">
            {stories.map((story) => (
              <div className="story-item">
                <div className="story-item__text">{story.comment}</div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share
