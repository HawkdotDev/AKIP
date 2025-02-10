import { useEffect, useRef } from "react";

import adani from "../assets/Company/adani.png";
import goodwe from "../assets/Company/goodwe.png";
import jio from "../assets/Company/jio.png";
import tata from "../assets/Company/tata.png";
import renew from "../assets/Company/renew.png";

const images = [
  { src: adani, alt: "Adani" },
  { src: goodwe, alt: "GoodWe" },
  { src: jio, alt: "Jio" },
  { src: tata, alt: "Tata" },
  { src: renew, alt: "Renew" },
];

const ShowcaseScroll = () => {
  const slideshowRef = useRef(null);

  useEffect(() => {
    const slideshow = slideshowRef.current;

    let scrollAmount = 0;

    const scrollSlideshow = () => {
      if (slideshow) {
        scrollAmount += 1; // Adjust scroll speed
        slideshow.scrollLeft = scrollAmount;

        // Reset scroll position when reaching the end
        if (scrollAmount >= slideshow.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scrollSlideshow, 16); // ~60 FPS (16ms interval)
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="w-full flex flex-col items-center">
      <div className="px-7 pt-9 pb-3 text-3xl">
        Technological Partners
      </div>
        <div
          ref={slideshowRef}
          className="w-full my-10 overflow-hidden whitespace-nowrap relative"
        >
          <div className="flex space-x-10">
            {/* Duplicated images for seamless scrolling */}
            {[...images, ...images].map((image, index) => (
              <div key={index} className="w-72 h-44 flex-shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowcaseScroll;
