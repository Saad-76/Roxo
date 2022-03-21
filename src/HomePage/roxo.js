import React from "react";
import roxo from "../Assests/roxo.jpg";
import Coin from "../Assests/Coin.png";

import Logo from "../Assests/3.png";
import { Link } from "react-router-dom";

import "./roxo.css";

const Roxo = () => {
  return (
    <div className="col-sm-12">
      <div className="col-sm-12 roxo-style">
        <div className="col-md-12 roxo-main-style">
          <div className="col-md-6 roxo-text-section">
      
            <h3 className="roxo-xoin-heading">ROXO COIN</h3>
            <p className="text-style-roxo">
              ROXO is the first gaming platform that brings power and innovation
              to the mobile gaming industry where users can play and earn
              crypto, especially in mobile games. ROXO embed their own
              multiplayer mobile games to the block-chain world with help of
              creating an efficient and powerful distribution mechanism with
              well-built security layers in order to implement the Gamefi
              ecosystem for the mobile platforms.
            </p>
            <button className="btn btn-primary" style={{color:"white"}}>
       
             <Link to="/buyForm"><b style={{color:"white"}}>Buy</b></Link> 
            </button>
          </div>
          <div className="col-md-6 roxo-image-section">
            <img src={Coin} alt="roxo" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roxo;
