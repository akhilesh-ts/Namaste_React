import OfferCarousel from "./OfferCarousel";
import RestaurantDetails from "./RestaurantDetails";
import { TbSquareRoundedLetterVFilled } from "react-icons/tb";
import { TbSquareRoundedLetterNFilled } from "react-icons/tb";
import TopPicks from "./TopPicks";
import { useEffect, useState } from "react";
import {RestoShimmer} from '../Body/Shimmer'
import {
  CAROUSEL_TYPE,
  ITEM_CATEGORY,
  NESTED_ITEM_CATEGORY,
} from "../../utils/constants";
import RestaurantDishList from "./RestaurantDishList";
import useRestaurantMenu from "../../utils/customHooks/useRestaurantMenu";

const RestaurantMenuList = () => {
  const [resDetails, setResDetails] = useState(null);
  const [offerCard, setOfferCard] = useState(null);
  const [dishList, setDishList] = useState(null);
  const [topPickCarousel, setTopPickCarousel] = useState(null);
  const [catrgory, setCategory] = useState(null);

  //this state is used for controlled components
  const [showItem, setShowItem] = useState(0);

  const restaurantMenuDetails = useRestaurantMenu();

  useEffect(() => {
    fetchData();
  }, [restaurantMenuDetails]);

  const fetchData = () => {
    if (restaurantMenuDetails) {
      setResDetails(restaurantMenuDetails?.data?.cards[2]?.card?.card?.info);
      setOfferCard(
        restaurantMenuDetails?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
      );
      setDishList(
        restaurantMenuDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
    }
  };

  const filterData = () => {
    const carousel = dishList.filter(
      (item) => item?.card?.card?.["@type"] === CAROUSEL_TYPE
    );
    setTopPickCarousel(carousel[0]?.card?.card?.carousel);
    const dish = dishList.filter(
      (item) =>
        item?.card?.card?.["@type"] === ITEM_CATEGORY ||
        item?.card?.card?.["@type"] === NESTED_ITEM_CATEGORY
    );
    setCategory(dish);
  };

  useEffect(() => {
    if (dishList && dishList != null) {
      filterData();
    }
  }, [dishList]);

  return restaurantMenuDetails === null ? (
    <RestoShimmer/>
  ) : (
    <div className=" flex flex-col gap-10">
      {resDetails != null ? (
        <RestaurantDetails restaurantDetails={resDetails} />
      ) : null}
      {offerCard != null ? <OfferCarousel offerDetails={offerCard} /> : null}
      <div className="flex items-center gap-4">
        <div className="border flex items-center justify-center py-2 px-4  rounded-full  ">
          <label className="inline-flex items-center justify-center cursor-pointer mx-auto">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-14 h-7 bg-gray-100 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white dark:bg-gray-800 peer-checked:bg-white">
              <div className="absolute left-0.5 top-0.5 bg-white border-gray-400 border rounded-full h-6 w-6 transition-all peer-checked:translate-x-full flex items-center justify-center">
                <TbSquareRoundedLetterNFilled className="text-red-500 peer-checked:text-white text-lg " />
              </div>
            </div>
          </label>
        </div>
        <div className="border flex items-center justify-center py-2 px-4  rounded-full  ">
          <label className="inline-flex items-center justify-center cursor-pointer mx-auto">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-14 h-7 bg-gray-100 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white dark:bg-gray-800 peer-checked:bg-white">
              <div className="absolute left-0.5 top-0.5 bg-white border-gray-400 border rounded-full h-6 w-6 transition-all peer-checked:translate-x-full flex items-center justify-center">
                <TbSquareRoundedLetterVFilled className="text-green-500 peer-checked:text-white text-lg " />
              </div>
            </div>
          </label>
        </div>
        <button className="rounded-full border py-3 px-4 font-light hover:bg-zinc-400 text-sm transition duration-300">
          BestSeller
        </button>
      </div>
      <hr className="border-t-1 border-gray-300" />
      {topPickCarousel != null ? <TopPicks carousel={topPickCarousel} /> : null}
      {catrgory != null ? (
        <RestaurantDishList
          catrgoryitems={catrgory}
          showItem={showItem}
          setShowItem={setShowItem}
        />
      ) : null}
    </div>
  );
};
export default RestaurantMenuList;
