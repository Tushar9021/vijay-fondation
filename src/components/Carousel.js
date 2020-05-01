import React from "react";

const Carousel = (props) => {

  const {imageOne, imageTwo, imageThree} = props;

  return (
    <React.Fragment>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imageOne} className="d-block w-100" alt="Not Found" />
          </div>
          <div className="carousel-item">
            <img src={imageTwo} className="d-block w-100" alt="Not Found" />
          </div>
          <div className="carousel-item">
            <img src={imageThree} className="d-block w-100" alt="Not Found" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousel;