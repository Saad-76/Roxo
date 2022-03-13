import React from "react";
import FooterLeft from "../Assests/FooterLeft.png";
import FooterRight from "../Assests/FooterRight.png";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiOutlineInstagram, AiFillGoogleCircle } from "react-icons/ai";

import "./footerTwo.css";

const Footer = () => {
  return (
    <>
      <div className="footer-outer">
        <div className="col-md-12 footer-content">
          <div className="col-md-4">
            {/* <img src={FooterLeft} alt="" height="300px" width="300px"/> */}
          </div>
          <div className="col-md-4">
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
          <div className="col-md-4">
            {/* <img src={FooterRight} alt="" height="300px" width="300px"/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
