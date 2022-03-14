import React from "react";
import FooterLeft from "../Assests/FooterLeft.png";
import FooterRight from "../Assests/FooterRight.png";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiOutlineInstagram, AiFillGoogleCircle } from "react-icons/ai";

import "./footerTwo.css";

const Footer = () => {
  return (
    <div className="col-sm-12  " style={{overflowX:"hidden"}}>
     
        <div className="row ">
          <div className="col-md-4">
            <img src={FooterLeft} alt="" className="img-fluid"/>
          </div>
          <div className="col-md-4 m-auto footer-color">
            <h3>ROXO</h3>
            <div className="d-flex">
              <div>
                Facebook
                <BsFacebook size={25} />
              </div>
              &nbsp; &nbsp;
              <div>
                Instagram <AiOutlineInstagram size={30} />
              </div>
            </div>
            <div className="d-flex">
              <div>
                LinkedIn
                <BsLinkedin size={25} />
              </div>
              &nbsp; &nbsp;
              <div>
                Google
                <AiFillGoogleCircle size={30} />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="col-sm-12 text-right">
            <img src={FooterRight} alt="" className="img-fluid"/>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default Footer;
