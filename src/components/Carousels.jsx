import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";

export default function Carousels() {
  const [slides, setSlides] = useState([]);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch("/photo.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setSlides(data.slides);
      } catch (error) {
        console.error("Error fetching photo.json:", error);
      }
    };

    fetchSlides();
  }, []);

  return (
    <div className="relative">
      <Carousel
        autoplay={!isMouseOver}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`slide-${index}`}
            className="h-[10rem] lg:h-[40rem] w-full object-cover"
          />
        ))}
      </Carousel>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 lg:gap-8 mx-10 h-screen">
        <h2 className="text-white drop-shadow-lg text-xl md:text-3xl lg:text-5xl text-center font-bold">
                    Welcome to Event management system
        </h2>
        <div>
          <button className="my-2 border-2 lg:border-[3px] rounded-[40px] lg:text-lg py-2 lg:py-3 bg-[#12121259] px-6 md:px-8 text-center border-[#00A4EF] text-white font-semibold hover:bg-[#00A4EF] focus:outline-none">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
