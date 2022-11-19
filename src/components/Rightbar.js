import React from "react";
import './Rightbar.css';
import { Input } from "web3uikit";
import reactVid from '../images/react-tutorial.png';


const Rightbar = () => {
  const feeds = [
    {
      img: reactVid,
      text: "React JS - React Tutorial for Beginners",
      link: "https://youtu.be/Ke90Tje7VS0",
    },
    // {
    //   img: netflix,
    //   text: "The fisrt Moralis Project! Let's Netflix and chill...",
    //   link: "https://moralis.io/moralis-projects-learn-to-build-a-web3-netflix-clone/",
    // },
    // {
    //   img: academy,
    //   text: "Master DeFi in 2022. Start  at the Moralis Academy...",
    //   link: "https://academy.moralis.io/courses/defi-101",
    // },
    // {
    //   img: js,
    //   text: "Become a Web3 Developer with just simple JS...",
    //   link: "https://academy.moralis.io/all-courses",
    // },
    // {
    //   img: youtube,
    //   text: "Best youtube channel to learn about Web3...",
    //   link: "https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw",
    // },
  ];

  return (
    <>
    <div className="rightBarContent">
      <Input
      label="Search Video"
      name="Search Video"
      prefixIcon="search"
      labelBgColor="141d26"
      />     
    </div>

    <div className="feeds">
      Discover New Video
      {feeds.map((e) => {
        return (
          <>
          <div className="feed" onClick={() => window.open(e.link)}>
            <img src={e.img} alt="" className="feedImg" />
            <div className="feedText">{e.text}</div>
          </div>
          </>
        )
      })}
    </div>

    </>
  );
};

export default Rightbar;

