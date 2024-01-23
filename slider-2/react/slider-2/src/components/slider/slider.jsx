import React, { useState, useEffect } from "react";

import data from "../../../data/data";
import "./slider-style.scss";

const Slider = () => {
  const [itemActive, setItemActive] = useState(0);

  const handleNextClick = () => {
    setItemActive((prevItemActive) =>
      prevItemActive + 1 >= data.length ? 0 : prevItemActive + 1
    );
  };

  const handlePrevClick = () => {
    setItemActive((prevItemActive) =>
      prevItemActive - 1 < 0 ? data.length - 1 : prevItemActive - 1
    );
  };
  // Auto run slider
  useEffect(() => {
    const refreshInterval = setInterval(() => {
      handleNextClick();
    }, 5000);

    return () => clearInterval(refreshInterval);
  }, [itemActive]);

  // Click thumbnail
  const handleThumbnailClick = (index) => {
    setItemActive(index);
  };

  return (
    <div>
      {/* header section */}
      <div className="header">
        <div className="logo">
          <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5 L40 45 L10 45 Z" fill="#cccccc" />
            <text
              x={25}
              y={25}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={24}
              fill="#fff"
            >
              S
            </text>
          </svg>
        </div>

        <ul className="menu">
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </div>
      {/* Your React JSX structure here */}
      <div className="slider">
        <div className="list">
          {data?.map((item, indx) => {
            return (
              <div
                className={`item ${indx === itemActive ? "active" : ""}`}
                key={indx}
              >
                <img src={item.imageLink} alt={indx} />
                <div className="content">
                  <p>{item.subTitle}</p>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Button arrows */}
      <div className="arrows">
        <button onClick={handlePrevClick}>{"<"}</button>
        <button onClick={handleNextClick}>{">"}</button>
      </div>

      {/* Thumbnail section */}
      <div className="thumbnail">
        {data?.map((item, indx) => {
          return (
            <div
              className={`item ${indx === itemActive ? "active" : ""}`}
              onClick={() => handleThumbnailClick(indx)}
              key={indx}
            >
              <img src={item.imageLink} alt={indx} />
              <div className="content"> {item.title_2} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
