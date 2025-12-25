import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="parent fourOfour-parent bg-img">
        <div className="fourOfour-cont">
          <div className="contain">
            <span className="number">404</span>
            <p className="text">Page not found!</p>
          </div>
          <Link to="/" className="button cta-btn">
            <p>Back To Home</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
