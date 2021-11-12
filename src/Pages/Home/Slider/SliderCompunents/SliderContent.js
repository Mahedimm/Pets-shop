import React from "react";
import "./style.css";
function SliderContent({ activeIndex, sliderImage }) {
  return (
    <>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive "}
        >
            <div>
            <h1 className="slide-title">{slide.title}</h1>
            <button className='slide-button'>learn more</button>
            </div>
           
            <img className="slide-image" src={slide.urls} alt=""  />   
         
        </div>
      ))}
    </>
  );
}

export default SliderContent;