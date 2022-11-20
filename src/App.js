import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { useState } from "react";
import { ConnectButton } from "web3uikit";

const App = () => {

  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    // Check if MetaMask extension exits
    if(window.ethereum) {
      console.log("MetaMask is available!");

      try {
        const accounts = await  window.ethereum.request({
          method: "eth_requestAccounts"
        });
        setWalletAddress(accounts[0]);
        console.log(accounts)
      } catch (err) {
        console.log(err);
      }

    } else {
      alert('MetaMask extension need to be installed');
    }
  }

  // Create a provider to interact with a smart contract
  

  return (
    <>
    {walletAddress ? (
      <div className="page">
        <div className="sideBar">
            <Sidebar/>
            <div className="logout"
            onClick={() => {
              window.location.reload();
            }}
            >
              Logout
            </div>
          </div>
        
          <div className="mainWindow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        <div className="rightBar">
          <Rightbar/>
        </div>
      </div>
    ) : (
      <div className="loginPage">
        <button onClick={requestAccount}>Connect</button>
      </div>
    )}
    </>
  );
};

export default App;
