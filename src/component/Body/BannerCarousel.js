import React, { useContext, useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { carouselCategory } from "../../utils/mockData";
import { CAROUSEL_IMAGE_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";
import { useUser } from "@clerk/clerk-react";

const BannerCarousel = () => {
  const { name, setUserName } = useContext(UserContext);
  const [carouselData] = useState(carouselCategory);
  const [slide, setSlide] = useState(0);
  const { isSignedIn, user} = useUser()

  const forwardButton = () => {
    if (carouselData.length - 8 == slide) return false;
    setSlide(slide + 3);
  };

  const backButton = () => {
    if (slide === 0) return false;
    setSlide(slide - 3);
  };

  return (
    <div className=" w-full my-6">
      <div className="  flex items-center justify-between ">
        <div>
          <h1 className=" font-light sm:font-semibold text-sm md:text-lg ">
            {
              isSignedIn?`${user.fullName},Whats on your mind ?` : 'Hi there,Whats on your mind ?'
            }
            
          </h1>
          {/* <input className="border border-black" value={name} onChange={(e)=>setUserName(e.target.value)}  /> */}
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center justify-between gap-4">
            <div
              className=" bg-slate-200 p-2 rounded-full cursor-pointer hidden md:block"
              onClick={backButton}
            >
              <IoArrowBack />
            </div>
            <div
              className=" bg-slate-200 p-2 rounded-full cursor-pointer hidden md:block"
              onClick={forwardButton}
            >
              <IoArrowForward />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full grid grid-cols-5 md:flex  overflow-hidden ">
          {carouselData.map((item) => (
            <div
              key={item?.id}
              style={{ transform: `translateX(-${slide * 100}%)` }}
              className=" md:w-[110px]  shrink-0 duration-500 "
            >
              <img
                src={`${CAROUSEL_IMAGE_URL}${item?.imageId}`}
                alt="trend-image"
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
