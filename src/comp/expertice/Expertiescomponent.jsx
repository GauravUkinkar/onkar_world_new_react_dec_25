import React from "react";

const Expertiescomponent = (props) => {
  return (
    <>
      <div className="e-card cursor-dark">
        <div className="card-overlay cursor-dark"></div>
        <div className="e-icon-box cursor-dark">
          <div className="icon">
            <svg className="e-icon-svg" width="200" height="200">
              <image
                href={props.img}
                alt="none"
                width="100%"
                height="100%"
                className="e-icon-img"
              />
            </svg>
            <svg className="e-icon-svg-hover" width="200" height="200">
              <image
                href={props.img_hover}
                alt="none"
                width="100%"
                height="100%"
                className="e-icon-img-hover"
              />
            </svg>
          </div>
        </div>
        <div className="e-card-content cursor-dark">
          <h3 className="title3 cursor-dark">{props.cardHeading}</h3>
          <p className="e-card-p cursor-dark">{props.cardText}</p>
        </div>
      </div>
    </>
  );
};

export default Expertiescomponent;
