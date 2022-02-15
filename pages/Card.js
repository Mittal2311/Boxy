import React from "react";

const Card = () => {
  return (
    <div className="container mt-5 mb-3">
      <div className="row">
      <div className="col-md-4">
          <div className="card_box">
            <a href="#" className="box_icon">
              <img src="/process.png" />
            </a>
            <h5>Process</h5>
            <p>
            Our process has been carefully built over years to ensure quality and speed.
            </p>
            <a href="#" className="card_link">
              {" "}
              learn more
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/card1.png" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card_box">
            <a href="#" className="box_icon">
              <img src="/time.png" />
            </a>
            <h5>Time</h5>
            <p>
              We never rush, but are always timely. We’re yet to miss a
              deadline.
            </p>
            <a href="#" className="card_link">
              {" "}
              learn more
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/card1.png" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card_box">
            <a href="#" className="box_icon">
              <img src="/time.png" />
            </a>
            <h5>Time</h5>
            <p>
              We never rush, but are always timely. We’re yet to miss a
              deadline.
            </p>
            <a href="#" className="card_link">
              {" "}
              learn more
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/card1.png" />
          </div>
        </div>
         
      </div>
    </div>
  );
};
export default Card;
