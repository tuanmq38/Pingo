import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import logo from '../images/Pingo-logo.png';
import home from '../images/home-icon.png';
import profile from '../images/profile-icon.png';
import settings from '../images/settings-icon.png';

const Sidebar = () => {
  return (
    <>
      <div className="siderContent">
        <div className="menu"></div>
        <img src={logo} alt="" />
      </div>

      <Link to="/" className="link">
        <div className="menuItems">
          <img src={home} alt="" /> Home
        </div>
      </Link>

      <Link to="/profile" className="link">
        <div className="menuItems">
          <img src={profile} alt="" /> Profile
        </div>
      </Link>

      <Link to="/settings" className="link">
        <div className="menuItems">
          <img src={settings} alt="" /> Settings
        </div>
      </Link>
    </>
  );
};

export default Sidebar;
