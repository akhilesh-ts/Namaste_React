import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { CDN_LINK } from "../../utils/constants";
import { useState } from "react";

const OfferCarousel = ({ offerDetails }) => {
  const [slide, setSlide] = useState(0);

  const forwardButton = () => {
    if (slide < offerDetails.length - 1) {
      setSlide(slide + 2);
    }
  };

  const backButton = () => {
    if (slide > 0) {
      setSlide(slide - 2);
    }
  };

  return (
    <>
      <div>
        <div className="  flex items-center justify-between ">
          <div>
            <h1 className=" font-semibold text-sm md:text-lg ">
              Deals For you
            </h1>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center justify-between gap-4">
              <div
                data-testid="arrow"
                className=" bg-slate-200 p-2 rounded-full cursor-pointer hidden md:block"
                onClick={backButton}
              >
                <IoArrowBack />
              </div>
              <div
                data-testid="arrow"
                className=" bg-slate-200 p-2 rounded-full cursor-pointer hidden md:block"
                onClick={forwardButton}
              >
                <IoArrowForward />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto md:overflow-hidden mt-4 max-w-full">
          {offerDetails.length > 0
            ? offerDetails.map((item) => (
                <div
                  key={item?.info?.offerIds[0]}
                  style={{ transform: `translateX(-${slide * 100}%)` }}
                  className="flex-shrink-0 flex items-center gap-2 border p-2 w-full sm:w-1/3 rounded-lg duration-500 "
                  data-testid="offer-carousel"
                >
                  <div className="w-14">
                    <img
                      src={`${CDN_LINK}${item?.info?.offerLogo}`}
                      alt="coupon-image"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold">{item?.info?.header}</h2>
                    <p className="text-zinc-400">{item?.info?.couponCode}</p>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default OfferCarousel;
