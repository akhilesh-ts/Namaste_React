import { Badge } from "flowbite-react";
import { MdStars } from "react-icons/md";
import { IoMdBicycle } from "react-icons/io";

const RestaurantDetails = ({ restaurantDetails }) => {

  console.log('restaurant details',restaurantDetails);
  

  const {
    name,
    avgRating,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    areaName,
  } = restaurantDetails;


  

  const { slaString } = restaurantDetails?.sla;

  const { message } = restaurantDetails?.feeDetails;

  let cleanMessage = message.replace(/<\/?b>/g, "");

  return (
    <>
      <div className="w-full md:mt-10  mt-5 rounded-b-3xl md:rounded-none">
        <h1 className=" hidden md:block text-lg font-extrabold mb-5" data-testid="restaurant-name">{name}</h1>
        <div className="border bg-white rounded-3xl md:rounded-lg p-5 shadow-lg  flex flex-col gap-2 md:gap-4">
          <div className="hidden md:block">
            <div className=" flex items-center gap-3">
              <MdStars className="text-2xl text-green-700" />
              <Badge className="bg-purple-500 text-white font-medium p-1">
                {avgRating} ({totalRatingsString})
              </Badge>
              <Badge
                color="indigo"
                className="bg-orange-400 text-white font-medium p-1"
              >
                {costForTwoMessage}
              </Badge>
            </div>
          </div>
          <div className=" md:hidden flex items-center justify-between">
            <p className="font-semibold">{name}</p>
            <div className="flex items-center gap-1 rounded-lg bg-green-400 px-1 text-white">
              <span>
                <MdStars className="text-white" />
              </span>
              <span>{avgRating}</span>
            </div>
          </div>
          <p className="font-light md:font-semibold text-orange-400">
            {cuisines.join(",")}
          </p>
          <div className=" flex flex-col gap-2">
            <p className="font-light md:font-semibold ">
              Outlet{" "}
              <span className="text-zinc-400 font-extralight">{areaName}</span>
            </p>
            <p className=" font-light md:font-semibold">{slaString}</p>
          </div>
          <hr className="border-t-1 border-gray-300" />
          <div className="flex items-center gap-2 text-zinc-400">
            <IoMdBicycle className="text-lg md:text-2xl" />
            <p className="text-sm font-light md:font-semibold">
              {message}
            </p>
          </div>
          <hr className="border-t-1 border-gray-300" />
          <div className="flex items-center gap-2 text-zinc-400">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_86,h_30/Swiggy%20One%20Lite/One_lite_Horizontal.png"
              className="w-12 h-4"
              alt=""
            />
            <p className="text-sm font-light md:font-semibold text-orange-500">
              Free delivery on orders above ₹199
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
