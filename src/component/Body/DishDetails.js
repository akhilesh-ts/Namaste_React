import { ITEM_CATEGORY_IMAGE } from "../../utils/constants";
import { useState } from "react";
import { HiStar } from "react-icons/hi";
import { BiCheckboxSquare } from "react-icons/bi";
import default_image from "../../asset/default_image.png";
import { addItem,removeItem } from "../../utils/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";

const DishDetails = ({ details }) => {
  const [showFull, setShowFull] = useState(false);

  const showFullDescription = () => {
    setShowFull((prev) => !prev);
  };
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  // console.log('from the dishdetails',cartItems);
  
  const AddItemToCart = (item) => {
    dispatch(addItem(item));
  };

  const removeItemFromcart=()=>{
    dispatch(removeItem())
  }

  const fullDescription = `Centre loaded with Molten Cheese & topped with Chicken Keema & Red Paprika with our spicy Peri Peri Sauce *Contains non-edible container under the Pizza`;
  return (
    <>
      {details.map((item) => (
        < div key={item?.card?.info?.id} data-testid="food-items">
          <div
            
            className="flex items-center justify-between gap-2"
          >
            <div className="" >
              {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                <BiCheckboxSquare className="text-green-500 text-lg" />
              ) : (
                <BiCheckboxSquare className="text-red-600 text-lg" />
              )}

              <h1 className="text-sm font-semibold md:text-lg text-zinc-800">
                {item?.card?.info?.name}
              </h1>

              <h2 className="text-sm font-semibold md:text-lg text-black">
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </h2>
              <p className="flex items-center gap-1 text-green-600">
                <span>
                  <HiStar />
                </span>

                <span>
                  {" "}
                  {item?.card?.info?.ratings?.aggregatedRating?.rating}
                </span>
              </p>
              <div className="hidden md:block">
                <p className="text-xs font-semibold md:text-sm text-zinc-800">
                  {fullDescription}
                </p>
              </div>
              <div
                className="md:hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: showFull ? "auto" : "60px" }}
              >
                <p
                  className="text-xs font-light md:text-sm text-zinc-800 transition ease-in-out delay-150 "
                  onClick={showFullDescription}
                >
                  {showFull
                    ? fullDescription
                    : fullDescription.substring(0, 58)}
                  <span className="md:hidden font-semibold">
                    {" "}
                    {showFull ? "Less" : "more.."}
                  </span>
                </p>
              </div>
            </div>

            <div className=" flex flex-col flex-shrink-0 gap-2">
              <div className="h-40  w-40">
                <img
                  src={
                    item?.card?.info?.imageId
                      ? `${ITEM_CATEGORY_IMAGE + item?.card?.info?.imageId}`
                      : default_image
                  }
                  className="rounded-lg w-full h-full object-cover"
                  alt="dish"
                />
              </div>
              {cartItems.length > 0 ? (
                <div className=" inline-flex  rounded-md shadow-sm ">
                  <button className="px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-s-lg " onClick={()=>removeItemFromcart()}>
                    <HiMinus />
                  </button>
                  <p className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200">
                    {cartItems[0]?.quantity}
                  </p>
                  <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg " onClick={() => AddItemToCart(item)}>
                    <HiPlus />
                  </button>
                </div>
                // <button
                //   className="border bg-white text-green-500 shadow-lg rounded-lg py-2"
                  
                // >
                //   Go to cart
                // </button>
              ) : (
                <button
                  className="border bg-white text-green-500 shadow-lg rounded-lg py-2"
                  onClick={() => AddItemToCart(item)}
                >
                  ADD
                </button>
              )}
            </div>
          </div>

          <hr className="border-1 mb-3 mt-3" />
        </div>
      ))}
    </>
  );
};

export default DishDetails;
