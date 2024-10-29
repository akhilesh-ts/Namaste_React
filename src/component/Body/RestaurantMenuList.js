import OfferCarousel from "./OfferCarousel";
import RestaurantDetails from "./RestaurantDetails";
import { TbSquareRoundedLetterVFilled } from "react-icons/tb";
import { TbSquareRoundedLetterNFilled } from "react-icons/tb";
import TopPicks from "./TopPicks";
import { useEffect, useState } from "react";
import { RestoShimmer } from "../Body/Shimmer";
import {
  CAROUSEL_TYPE,
  ITEM_CATEGORY,
  NESTED_ITEM_CATEGORY,
} from "../../utils/constants";
import RestaurantDishList from "./RestaurantDishList";
import useRestaurantMenu from "../../utils/customHooks/useRestaurantMenu";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const RestaurantMenuList = () => {
  const [resDetails, setResDetails] = useState(null);
  const [offerCard, setOfferCard] = useState(null);
  const [dishList, setDishList] = useState(null);
  const [topPickCarousel, setTopPickCarousel] = useState(null);
  const [category, setCategory] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [tourCompleted, setTourCompleted] = useState(false);
  //this state is used for controlled components
  const [showItem, setShowItem] = useState(0);

  // this state for filtering the veg and the non veg

  const [isVeg, setIsVeg] = useState(false);

  const [isNonVeg, setIsNonVeg] = useState(false);


  const restaurantMenuDetails = useRestaurantMenu();

  useEffect(() => {
    fetchData();
  }, [restaurantMenuDetails]);

  const fetchData = () => {
    if (restaurantMenuDetails) {
     
      setResDetails(restaurantMenuDetails?.data?.cards[2]?.card?.card?.info);
      setOfferCard(
        restaurantMenuDetails?.data?.cards[3]?.card?.card?.gridElements
          ?.infoWithStyle?.offers
      );
      setDishList(
        restaurantMenuDetails?.data?.cards[4]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards
      );
    }
  };

  // currently this nested category is not working if you can want this nested item you can add inside the map
  // ||
  // item?.card?.card?.["@type"] === NESTED_ITEM_CATEGORY
  const filterData = () => {
    const carousel = dishList.filter(
      (item) => item?.card?.card?.["@type"] === CAROUSEL_TYPE
    );
    setTopPickCarousel(carousel[0]?.card?.card?.carousel);
    const dish = dishList.filter(
      (item) =>
        item?.card?.card?.["@type"] === ITEM_CATEGORY 
    );
    setCategory(dish);
    setCategoryFilter(dish);
  };

  useEffect(() => {
    if (dishList && dishList != null) {
      filterData();
    }
  }, [dishList]);


  useEffect(() => {
    if (!tourCompleted) {
        const driverObj = driver({
            showProgress: true,
            steps: [
                {
                    element: "#nonVeg-filter",
                    popover: {
                        title: "NonVeg filter",
                        description:
                            "Our app offers a Non veg filter, but it’s currently incomplete due to Swiggy API limitations. We are working to resolve this and will launch the full feature soon.",
                        side: "left",
                        align: "start",
                    },
                },
                {
                    element: "#veg-filter",
                    popover: {
                        title: "Veg filter",
                        description:
                            "Our app offers a vegetarian filter, but it’s currently incomplete due to Swiggy API limitations. We are working to resolve this and will launch the full feature soon.",
                        side: "left",
                        align: "start",
                    },
                },
                {
                    element: "#best-seller",
                    popover: {
                        title: "Best Seller",
                        description:
                            "Our app offers a Best seller filter, but it’s currently incomplete due to Swiggy API limitations. We are working to resolve this and will launch the full feature soon.",
                        side: "left",
                        align: "start",
                    },
                },
            ],
        });

        // Check if driverObj is valid before calling drive()
        if (driverObj && typeof driverObj.drive === 'function') {
            driverObj.drive();
            setTourCompleted(true); // Mark the tour as completed after it runs
        } else {
            console.error("driverObj is undefined or drive is not a function");
        }
    }
}, [tourCompleted]);


  const handleToggle = (value) => {
    if (value === "veg") {
      setIsVeg((prev) => !prev);
      setIsNonVeg(false);
    }
    if (value === "nonveg") {
      setIsNonVeg((prev) => !prev);
      setIsVeg(false);
    }
  };

  return restaurantMenuDetails === null ? (
    <RestoShimmer />
  ) : (
    <div className=" flex flex-col gap-10">
      {resDetails != null ? (
        <RestaurantDetails restaurantDetails={resDetails} />
      ) : null}
      {offerCard != null ? <OfferCarousel offerDetails={offerCard} /> : null}
      <div className="flex items-center gap-4">
        <div
          id="nonVeg-filter"
          className="border flex items-center justify-center py-2 px-4 rounded-full"
        >
          <label className="inline-flex items-center justify-center cursor-pointer mx-auto">
            <input
            data-testid="filter-button"
              type="checkbox"
              className="sr-only peer"
              checked={isNonVeg} // Bind the state to the checkbox
              onChange={() => handleToggle("nonveg")} // Toggle the state
            />
            <div
              className={`relative w-14 h-7 bg-gray-100 rounded-full transition-all duration-300 ${
                isNonVeg ? "bg-red-500" : "bg-gray-100"
              }`}
            >
              <div
                className={`absolute left-0.5 top-0.5 bg-white border-gray-400 border rounded-full h-6 w-6 transition-all duration-300 flex items-center justify-center ${
                  isNonVeg ? "translate-x-full" : ""
                }`}
              >
                <TbSquareRoundedLetterVFilled
                  className={`text-lg ${
                    isNonVeg ? "text-white" : "text-red-500"
                  }`}
                />
              </div>
            </div>
          </label>
        </div>
        {/* <div className="border flex items-center justify-center py-2 px-4  rounded-full  ">
          <label className="inline-flex items-center justify-center cursor-pointer mx-auto">
            <input type="checkbox" value="" checked={isVeg} className="sr-only peer" onChange={()=>setIsVeg(prev=>!prev)} />
            <div className="relative w-14 h-7 bg-gray-100 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white dark:bg-gray-800 peer-checked:bg-white">
              <div className="absolute left-0.5 top-0.5 bg-white border-gray-400 border rounded-full h-6 w-6 transition-all peer-checked:translate-x-full flex items-center justify-center">
                <TbSquareRoundedLetterVFilled className="text-green-500 peer-checked:text-white text-lg " />
              </div>
            </div>
          </label>
        </div> */}
        <div
          id="veg-filter"
          className="border flex items-center justify-center py-2 px-4 rounded-full"
        >
          <label className="inline-flex items-center justify-center cursor-pointer mx-auto">
            <input
             data-testid="filter-button"
              type="checkbox"
              className="sr-only peer"
              checked={isVeg} // Bind the state to the checkbox
              onChange={() => handleToggle("veg")} // Toggle the state
            />
            <div
              className={`relative w-14 h-7 bg-gray-100 rounded-full transition-all duration-300 ${
                isVeg ? "bg-green-500" : "bg-gray-100"
              }`}
            >
              <div
                className={`absolute left-0.5 top-0.5 bg-white border-gray-400 border rounded-full h-6 w-6 transition-all duration-300 flex items-center justify-center ${
                  isVeg ? "translate-x-full" : ""
                }`}
              >
                <TbSquareRoundedLetterVFilled
                  className={`text-lg ${
                    isVeg ? "text-white" : "text-green-500"
                  }`}
                />
              </div>
            </div>
          </label>
        </div>
        <button
        data-testid="filter-button"
          id="best-seller"
          className="rounded-full border py-3 px-4 font-light hover:bg-zinc-400 text-sm transition duration-300"
        >
          BestSeller
        </button>
      </div>
      <hr className="border-t-1 border-gray-300" />
      {topPickCarousel != null ? <TopPicks carousel={topPickCarousel} /> : null}
      {category != null ? (
        <RestaurantDishList
          categoryitems={category}
          showItem={showItem}
          setShowItem={setShowItem}
        />
      ) : null}
    </div>
  );
};
export default RestaurantMenuList;
