import React from "react";
import leftChevron from "../assets/left-arrow.svg";
import rightChevron from "../assets/right-arrow.svg";
import "./Slider.css";
import { useState } from "react";
import sliderData from "../data/sliderData";

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1);
  const str = 'Life, the universe and everything. Answer:';

console.log(`${str} ${str.length}`);
  return (
    <>
      <p className="index-info">{sliderIndex}/{sliderData.length}</p>
      <div className="slider">
        <p className="image-info">{sliderData.find(obj => obj.id === sliderIndex).description}</p>
        <img
          src={`/images/img-${sliderIndex}.jpg`}
          alt="estate's rooms"
          className="slider-img"
        />
        <button className="navigation-button prev-button">
          <img src={leftChevron} alt="previous image" />
        </button>
        <button className="navigation-button next-button">
          <img src={rightChevron} alt="next image" />
        </button>
      </div>
    </>
  );
}
