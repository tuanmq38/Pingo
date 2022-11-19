import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import banner from '../images/banner.png';
import profile1 from '../images/profile-pic1.jpg';
import PostInFeed from '../components/PostInFeed';

const Profile = () => {
  return (
    <>
      <div className="pageIdentity"> Profile </div>
      <img src={banner} alt="" className="profileBanner" />
      <div className='profileContainer'>
        <img src={profile1} className="profileImg" />
        <div className='profileName'>Quintus</div>
        <div className='profileWallet'>0x12...567</div>
        <Link to="/settings">
          <div className='profileEdit'>Edit profile</div>
        </Link>
        <div className='profileBio'>
          This is my profile bio!
        </div>
        <div className='profileTabs'>
          <div className='profileTab'>
            My Posts
          </div>
        </div>
      </div>
      <PostInFeed profile={true}></PostInFeed>
    </>
  );
};

export default Profile;
