import React from "react";
import { Badge } from "flowbite-react";
import { RES_IMAGE } from "../../utils/constants";

export const RestoCard = (props) => {
  const { name, areaName, cuisines, avgRating, cloudinaryImageId } =
    props.resData.info;

  const { slaString } = props.resData.info.sla;

  return (
    <div data-testid="resto-card" className=" w-full md:max-w-60  rounded-lg cursor-pointer transform hover:scale-95 transition-transform duration-300 ">
      <div className="w-full h-48">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={RES_IMAGE + cloudinaryImageId}
          alt="Sample Image"
        />
      </div>
      <div className="px-3 py-4  flex flex-col gap-2 ">
        <div className="overflow-hidden">
          <h3 className="font-bold text-ellipsis whitespace-nowrap">{name}</h3>
        </div>

        <div className="flex items-center justify-between">
          <Badge color="success" className="text-xs hidden lg:block"> {avgRating} Rating </Badge>
          <Badge color="success" className="text-xs lg:hidden  "> {avgRating} R </Badge>
          <Badge color="indigo"> {slaString}</Badge>
        </div>

        <h5 className="overflow-hidden text-ellipsis whitespace-nowrap text-slate-600 ">
          {cuisines.join(",")}
        </h5>
        <h6 className="overflow-hidden text-ellipsis whitespace-nowrap text-slate-600">
          {areaName}
        </h6>
      </div>
    </div>
  );
};

export const BestSellerResto = (RestoCard) => {
  return (props) => {
    return (
      <>
        <div className="relative transform hover:scale-95 transition-transform duration-300 ">
          <Badge className="absolute top-2 left-2 px-2 py-1 bg-orange-400 text-white rounded-md shadow-lg z-10">
            Best Seller
          </Badge>
          <RestoCard {...props} />
        </div>
      </>
    );
  };
};

export default RestoCard;
