import React from "react";
import "./style.css";

export const Container = () => {
  return (
    <div className="container">
      <div className="div">
        <div className="LOGO">
          <div className="text-wrapper">EDYODA</div>
        </div>
        <div className="div-2">
          <div className="text">Courses</div>
          <img className="img" alt="Icon chevron down" src="" />
        </div>
        <div className="div-2">
          <div className="text">Programs</div>
          <img className="img" alt="Icon chevron down" src="" />
        </div>
      </div>
      <div className="div">
        <img className="img" alt="Search icon" src="" />
        <div className="log-in">
          <div className="text-2">Log in</div>
        </div>
        <div className="primary-button">
          <div className="text-3">JOIN NOW</div>
        </div>
      </div>
    </div>
  );
};