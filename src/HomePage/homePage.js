import React from "react";
import "./homePage.css";
import Header from "./header";
import Slider from "./slider";
import Roxo from "./roxo";
import Vision from "./vision";
import Video from "./video";
import Play from "./play";
import TesCards from "./TesCards";
import Login from "./login";
import SignUp from "./signUp";
import Footer from "./footer";
import MileStone from "./mileStone";
import OurCommunity from "./ourCommunity";
import GamingNft from "./gamingNft";
// import LegendaryNft from "./legendaryNft";
import Partners from "./partners";
import Work from "./work";

const HomePage = () => {
  return (
    
    <div className=" background-color-main ">

    <div className="col-sm-12 p-0" style={{overflow:"hidden"}}>
      <Header />
      <SignUp />
      <Login />
      <Slider />

      <div className="col-sm-12">

      <TesCards />

      </div>
      <Roxo />
      <GamingNft />
      {/* <LegendaryNft />---- already commented */}
      {/* <MileStone /> */}
      {/* <Vision /> */}
      {/* <Play /> */}
      {/* <Video />---- already commented */}
      {/* <Work/> */}
      {/* <Partners /> */}
      {/* <OurCommunity /> */}
      {/* <Footer /> */}
      </div>
    </div>
  );
};

export default HomePage;
