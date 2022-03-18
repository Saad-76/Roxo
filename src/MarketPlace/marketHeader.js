import React from "react";
import FooterRight from "../Assests/FooterRight.png"
import "./marketHeader.css";

const MarketHeader = () => {
  return (
    <>
      <div className="market-Header-outer">
        <div className="background-image-marketHaeder">
          <div className="col-md-12 d-flex">
            <h3>Market Place</h3>
            <div className="col-md-6">
              <div className="col-md-2">
                <h6>Total Heroes</h6>
                <p>900 Heroes</p>
              </div>
              <div className="col-md-2">
                <h6>Total Volume</h6>
                <p>40961,21421 HER</p>
              </div>
              <div className="col-md-2">
                <h6>Highest Price</h6>
                <p>900 Heroes</p>
              </div>
            </div>
            <div className="col-md-6">
              {/* <img src={FooterRight} alt=""  height="300px" width="300px"/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MarketHeader;
