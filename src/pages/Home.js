import React from 'react';
import './Home.css';
import { TextArea, Icon } from 'web3uikit';
import { useState, useRef } from 'react';
import profilePic1 from '../images/profile-pic1.jpg';
import videoIcon from '../images/video-icon.png';
import PostInFeed from '../components/PostInFeed';

const Home = () => {

  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState();

  const onVidPost = () => {
    inputFile.current.click();
  }

  const postHandler = (e) => {
    const vid =- e.target.files[0];
    setSelectedFile(URL.createObjectURL(vid));
  }

  return (
    <>
      <div className="homeContent">
        <div className="profileUser">
          <img src={profilePic1} className="profilePic" />

          <div className="textBox">
            <TextArea
              name="txtArea"
              value="Hello World"
              type="text"
              width="95%"
            ></TextArea>

             {/* {selectedFile && (
              <video src={selectedFile} type="video/mp4" className="postVid"></video>
            )} */}

            <div className="vidOrText">
              <div className="vidDiv" onClick={onVidPost}>
                <input 
                type="file"
                name='file' 
                ref={inputFile}
                onChange={postHandler}
                style={{display: "none"}}
                />
                <img src={videoIcon} alt="" />
              </div>
            </div>

            <div className="postIcons">
              <div className="post">Post</div>
              <div className="post">
                <Icon svg="matic" fill="#fff" size={20}></Icon>
              </div>
            </div>
          </div>
        </div>
        <PostInFeed profile={false} />
      </div>
    </>
  );
};

export default Home;
