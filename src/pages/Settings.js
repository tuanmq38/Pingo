import React from "react";
import { Link } from "react-router-dom";
import './Settings.css';
import { Input } from "web3uikit";
import { useState, useRef } from "react";
import pfp1 from "../images/pfp1.png";
import pfp2 from "../images/pfp2.png";
import pfp3 from "../images/pfp3.png";
import pfp4 from "../images/pfp4.png";
import pfp5 from "../images/pfp5.png";
import { defaultImgs } from "../defaultimgs";

const Settings = () => {
  
  const pfps = [pfp1, pfp2, pfp3, pfp4, pfp5];
  const [selectedPfp, setSelectedPfp] = useState();
  const [selectedFile, setSelectedFile] = useState(defaultImgs[1]);
  const inputFile = useRef(null);

  const onBannerClick = () => {
    inputFile.current.click();
  }

  const changeHandler = (e) => {
    const banner = e.target.files[0];
    setSelectedFile(URL.createObjectURL(banner));
  }

  return (
    <>
    <div className="pageIdentity">Settings</div>
    <div className="settingsPage">
      <Input
      label="Name"
      name="nameModify"
      width="100%"
      labelBgColor="#151c24"
      />

      <Input
      label="Bio"
      name="bioModify"
      width="100%"
      labelBgColor="#151c24"
      />

      <div className="pfp">
      Select your Profile Image 
        <div className="pfpSelections">
        {pfps.map((e,i) => {
          return (
            <img
            src={e}
            className={selectedPfp == e ? "pfpSelected" : "pfpSelect"}
            onClick={() => {setSelectedPfp(pfps[i])}}
            >
            
            </img>
          )
        })}
        </div>
      </div>

      <div className="pfp">
      Profile Banner
        <div className="pfpSelections">
        <img
        className="banner"
        src={selectedFile}
        onClick={onBannerClick}
        />
        <input
        type="file"
        name="file"
        ref={inputFile}
        onChange={changeHandler}     
        />
        </div>
      </div>
      <div className="save">
        Save
      </div>
    </div>
    </>
  );
};

export default Settings;

