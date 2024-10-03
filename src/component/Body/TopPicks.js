import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { CAROUSEL_IMAGE_URL } from "../../utils/constants";
import { useState } from "react";

const TopPicks = ({ carousel }) => {
  const [slide, setSlide] = useState(0);

  const forwardButton = () => {
    if (slide < carousel.length - 1) {
      setSlide(slide + 1); 
    }
  };

  const backButton = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-sm md:text-lg">Top Picks</h1>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center justify-between gap-4">
              <div
                className="bg-slate-200 p-2 rounded-full cursor-pointer hidden md:block"
                onClick={backButton}
              >
                <IoArrowBack />
              </div>
              <div
                className="bg-slate-200 p-2 rounded-full cursor-pointer hidden md:block"
                onClick={forwardButton}
              >
                <IoArrowForward />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-4 max-w-full overflow-hidden">
          {/* Wrapper div for all carousel items */}
          <div
            className="flex items-center gap-2 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${slide * 100}%)`, // Apply translation to the wrapper
              // width: `${carousel.length * 100}%`, // Ensure the width is enough to hold all slides
            }}
          >
            {carousel.map((item) => (
              <div
                key={item?.bannerId}
                className="relative flex-shrink-0 bg-cover bg-center bg-no-repeat h-80 w-80 rounded-lg"
                style={{
                  backgroundImage: `url(${CAROUSEL_IMAGE_URL + item.creativeId})`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-2 flex items-center justify-between">
                  <h2 className="text-white font-semibold">
                    {item?.dish?.info?.price / 100}
                  </h2>
                  <button className="bg-white px-5 py-2 rounded-lg text-green-300 shadow-inner font-bold">
                    ADD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPicks;
