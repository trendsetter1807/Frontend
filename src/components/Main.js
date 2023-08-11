import React from "react";
import "./style.css";

export const MainLockup = () => {
  return (
    <div className="main-lockup">
      <header className="header">
        <div className="frame">
          <div className="text-wrapper">Access curated courses worth</div>
        </div>
        <div className="div">
          <div className="text-wrapper-2">₹ 18,500</div>
          <div className="rectangle" />
          <div className="div-wrapper">
            <div className="text-wrapper-3">at just</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-4">₹ 99</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-3">per year!</div>
          </div>
        </div>
      </header>
      <div className="pointer">
        <img className="icon" alt="Icon" src="" />
        <div className="div-wrapper-2">
          <p className="text">
            <span className="span">100+ </span>
            <span className="text-wrapper-5">Job relevant courses</span>
            <span className="text-wrapper-6">&nbsp;</span>
          </p>
        </div>
      </div>
      <div className="pointer">
        <img className="icon" alt="Icon" src="" />
        <div className="div-wrapper-2">
          <p className="text">
            <span className="span">20,000+ </span>
            <span className="text-wrapper-5">Hours of content</span>
          </p>
        </div>
      </div>
      <div className="pointer">
        <div className="group-wrapper">
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper-7">live</div>
            </div>
          </div>
        </div>
        <div className="div-wrapper-2">
          <p className="text">
            <span className="span">Exclusive </span>
            <span className="text-wrapper-5">webinar access</span>
          </p>
        </div>
      </div>
      <div className="pointer">
        <img className="icon" alt="Icon" src="" />
        <div className="text-container">
          <div className="div-wrapper-2">
            <p className="scholarship-worth">
              <span className="text-wrapper-8">Scholarship worth </span>
              <span className="text-wrapper-9">₹94,500</span>
            </p>
          </div>
        </div>
      </div>
      <div className="pointer">
        <div className="icon-2">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-10">ADS</div>
              <div className="rectangle-2" />
            </div>
          </div>
        </div>
        <div className="div-wrapper-2">
          <p className="text">
            <span className="span">Ad Free </span>
            <span className="text-wrapper-5">learning experience</span>
          </p>
        </div>
      </div>
    </div>
  );
};
