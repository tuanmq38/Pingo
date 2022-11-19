import React from 'react';
import './PostInFeed.css';
import profilePic1 from '../images/profile-pic1.jpg';
import video1 from '../videos/test-clip.mp4';

const PostInFeed = () => {
  return (
    <>
      <div className="feedPost">
      <img src={profilePic1} className="profilePic"/>
        <div className="completePost">
          <div className="prof">
            Quintus
            <div className="acc">0x12...567 1h</div>
          </div>
          <div className="postContent">
            This is a testing video from Disney!
            <video className="postVid" controls>
              <source
                src={video1}
                type="video/mp4"
              ></source>
            </video>

          </div>
        </div>
      </div>
    </>
  );
};

export default PostInFeed;
