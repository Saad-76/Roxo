import React from "react"
import "./support.css"
import Header from "../HomePage/header"
import Footer from "../HomePage/footer"

import GameOne from "./gameOne";
import GameTwo from "./gameTwo";


const Support=()=>{
    return(
        <>
        <div className="support-background-color">
              <Header/>

        <GameOne/>
        <GameTwo/>
        <Footer/>
        </div>
        </>
    );
}
export default Support;