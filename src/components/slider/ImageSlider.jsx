import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ImageSlider = ({ images, interval = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);
  const handleClick = (e) => {
    setCurrentImageIndex(e);
  };
  return (
    <div className="relative h-screen w-full ">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="h-full w-full object-cover"
      />
      <div className="absolute top-1/2 md:top-[90%]  md:right-[none] md:left-[50%] md:-translate-x-[50%]  left-[95%] -translate-y-1/2 gap-3 *:border-3 *:rounded-full *:border-solid flex flex-col md:flex-row  z-20">
        <button
          className={`
            ${
              currentImageIndex !== 0
                ? "border-[#1A9BDD] text-white"
                : "border-white text-primary"
            } w-[30px] h-[30px] flex justify-center items-center
          `}
          onClick={() => handleClick(0)}
        >
          1
        </button>
        <button
          className={`
          ${
            currentImageIndex !== 1
              ? "border-[#1A9BDD] text-white"
              : "border-white text-primary"
          } w-[30px] h-[30px] flex justify-center items-center
        `}
          onClick={() => handleClick(1)}
        >
          2
        </button>
        <button
          className={`
          ${
            currentImageIndex !== 2
              ? "border-[#1A9BDD] text-white"
              : "border-white text-primary"
          } w-[30px] h-[30px] flex justify-center items-center
        `}
          onClick={() => handleClick(2)}
        >
          3
        </button>
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.any,
  interval: PropTypes.number,
};

export default ImageSlider;
