import React from "react";
import leftChevron from "../assets/left-arrow.svg";
import rightChevron from "../assets/right-arrow.svg";
import "./Slider.css";
import { useState, useEffect } from "react";
import sliderData from "../data/sliderData";

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1);
  const str = "Life, the universe and everything. Answer:";

  function toggleImage(indexPayLoad) {
    // let newState;
    // if (indexPayLoad + sliderIndex > sliderData.length) {
    //   newState = 1;
    // } else if (indexPayLoad + sliderIndex < 1) {
    //   newState = sliderData.length;
    // } else {
    //   newState = indexPayLoad + sliderIndex;
    // }
    // setSliderIndex(newState);
    setSliderIndex((state) => {
      if (indexPayLoad + state > sliderData.length) {
        return 1;
      } else if (indexPayLoad + state < 1) {
        return sliderData.length;
      } else {
        return state + indexPayLoad;
      }
    });
  }
  useEffect(() => {
    const intervalId = setInterval(() => toggleImage(1), 2000);
    return () => clearInterval(intervalId);
  }, []);

  console.log(`${str} ${str.length}`);
  return (
    <>
      <p className="index-info">
        {sliderIndex}/{sliderData.length}
      </p>
      <div className="slider">
        <p className="image-info">
          {sliderData.find((obj) => obj.id === sliderIndex).description}
        </p>
        <img
          src={`/images/img-${sliderIndex}.jpg`}
          alt="estate's rooms"
          className="slider-img"
        />
        <button
          onClick={() => toggleImage(-1)}
          className="navigation-button prev-button"
        >
          <img src={leftChevron} alt="previous image" />
        </button>
        <button
          onClick={() => toggleImage(1)}
          className="navigation-button next-button"
        >
          <img src={rightChevron} alt="next image" />
        </button>
      </div>
    </>
  );
}
