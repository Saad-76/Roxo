import React from "react";
import "./mileStone.css";

const MileStone = () => {
  return (
    <>
      <h1 className="heading-milestone">MileStones</h1>
      <div className="col-md-12 d-flex">
        <div className="col-md-4 milestone-cardOne-flex">
          <div className="milestone-card-bacground">
            <img src="" alt="" height="300px" width="250px" />
            <h6>Lorem Ipsm</h6>
            <p>Lorem ipsum dolor sit amet.</p>
            <button className="milestone-button-style">Lorem</button>
          </div>
        </div>
        <div className="col-md-4 milestone-cardTwo-flex">
          <div className="milestone-card-bacground">
            <img src="" alt="" height="300px" width="250px" />
            <h6>Lorem Ipsm</h6>
            <p>Lorem ipsum dolor sit amet.</p>
            <button className="milestone-button-style">Lorem</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="milestone-card-bacground">
            <img src="" alt="" height="300px" width="250px" />
            <h6>Lorem Ipsm</h6>
            <p>Lorem ipsum dolor sit amet.</p>
            <button className="milestone-button-style">Lorem</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MileStone;
