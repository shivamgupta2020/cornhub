import React, { useState, useEffect } from 'react';
import axios from 'axios';


const LikeButton = ({ video }) => {
    // Initialize state with the video's like count
    const [likeCount, setLikeCount] = useState(video.like);

    // Function to handle the click event
    const handleClick = async () => {
        try {
            // Increment the like count
            const updatedLikeCount = likeCount + 1;
            setLikeCount(updatedLikeCount);

            // Send the updated like count to the server
            const response = await axios.post(`http://localhost:5000/update-video/${video.id}`, {
                like: updatedLikeCount
            });

            if (response.status === 200) {
                console.log('Success:', response.data);
            } else {
                console.error('Failed to update like count:', response);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
}

export default LikeButton;