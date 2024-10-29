import React, { useEffect, useState } from "react";
import RestoCard, { BestSellerResto } from "./RestoCard";
import Shimmer from "./Shimmer";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import useFetchRestaurantList from "../../utils/customHooks/useFetchRestaurantList";


const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [filterVal, setFilterVal] = useState({
    allResto: false,
    topRated: false,
    fastDelivery: false,
    costForTwo: false,
  });
  const restaurant = useFetchRestaurantList();

  useEffect(() => {
    if (restaurant) {
      

      setRestaurantList(
        restaurant?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setSearchList(
        restaurant?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
  }, [restaurant]);

  const BestSellerRestoInfo = BestSellerResto(RestoCard);

  const handelToggle = (key) => {
    if (key === "allResto") {
      setFilterVal({
        allResto: true,
        topRated: false,
        fastDelivery: false,
        costForTwo: false,
      });
      setSearchVal("");
      setSearchList(restaurantList);
    }
    setFilterVal((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getFilteredData = () => {
    let filterData = [...searchList];

    if (filterVal.topRated) {
      filterData = filterData.filter((item) => item?.info?.avgRating > 4.3);
    }

    if (filterVal.fastDelivery) {
      filterData = filterData.filter(
        (item) => item?.info?.sla?.deliveryTime < 30
      );
    }

    if (filterVal.costForTwo) {
      filterData = filterData.filter((item) => {
        const cost = parseInt(item?.info?.costForTwo.replace(/[^\d]/g, ""));
        return cost < 500;
      });
    }

    return filterData;
  };

  const filteredData = getFilteredData();

  return restaurant !== null ? (
    <>
      <div className="w-full flex items-center justify-center flex-col ">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between mb-6">
          <div className="w-full sm:w-auto mb-4 sm:mb-0 sm:flex grid grid-cols-2  gap-2">
            <button
              className="w-full sm:w-auto  border-2 rounded-xl p-2"
              onClick={() => handelToggle("allResto")}
            >
              All
            </button>
            <button
              className={
                filterVal.topRated
                  ? "w-full sm:w-auto  border-2 rounded-xl p-2 bg-orange-400 text-white"
                  : "w-full sm:w-auto  border-2 rounded-xl p-2"
              }
              onClick={() => handelToggle("topRated")}
            >
              Top Rated
            </button>
            <button
              className={
                filterVal.fastDelivery
                  ? "w-full sm:w-auto  border-2 rounded-xl p-2 bg-orange-400 text-white"
                  : "w-full sm:w-auto  border-2 rounded-xl p-2"
              }
              onClick={() => handelToggle("fastDelivery")}
            >
              Fast Delivery
            </button>
            <button
              className={
                filterVal.costForTwo
                  ? "w-full sm:w-auto  border-2 rounded-xl p-2 bg-orange-400 text-white"
                  : "w-full sm:w-auto  border-2 rounded-xl p-2"
              }
              onClick={() => handelToggle("costForTwo")}
            >
              ₹200 - ₹400
            </button>
          </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-2">
            <input
              data-testid="search-input"
              className="w-full sm:w-auto border-2  rounded-lg p-2"
              type="search"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Search Restaurants..."
            />
            <Button
              className="w-full sm:w-auto"
              data-testid="search-button"
              aria-label="Search"
              onClick={() => {
                const searchData = filteredData.filter((res) =>
                  res.info.name.toLowerCase().includes(searchVal.toLowerCase())
                );
                setSearchList(searchData);
              }}
            >
              Search
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {
            filteredData.length>0?(
              filteredData.map((item) => (
                <Link
                  key={item?.info?.id}
                  to={`resmenu/${item?.info?.name}/${item?.info?.id}`}
                >
                  {item.info.avgRating >= 4.3 ? (
                    <BestSellerRestoInfo key={item?.info?.id} resData={item} />
                  ) : (
                    <RestoCard key={item?.info?.id} resData={item} />
                  )}
                </Link>
              ))
            ):(
              <div className="w-full  mt-40">
                <p className="text-center mb-2 "> no matching item found.....</p>
                <button
              className="w-full bg-blue-900 p-2 rounded-lg text-white"
              onClick={() => handelToggle("allResto")}
            >
              All Restaurant
            </button>
                </div>
            )
          
         }
        </div>

        
        
      </div>
      
    </>
  ) : (
    <Shimmer />
  );
};

export default RestaurantList;
