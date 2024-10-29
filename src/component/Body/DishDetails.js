import { ITEM_CATEGORY_IMAGE } from "../../utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router";
import { HiStar } from "react-icons/hi";
import { BiCheckboxSquare } from "react-icons/bi";
import default_image from "../../asset/default_image.png";
import { addItem, removeItem } from "../../utils/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const DishDetails = ({ details }) => {
  const [showFull, setShowFull] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [activeItemCart, setActiveItemCart] = useState(null);
  const [cartItemList,setCartItemList]=useState([])
  const navigate=useNavigate()
  const showFullDescription = (id) => {
    setActiveItem(activeItem === id ? null : id);
    // setShowFull((prev) => !prev);
  };
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  // console.log('from the dishdetails',details);

  const AddItemToCart = (item, id) => {
    console.log(id);
    
    setActiveItemCart(id);
    if(!cartItemList.includes(id)){
      setCartItemList([...cartItemList,id])
    }
    // if(!cartItemList.includes(id)){
    //   console.log(id);
    //   setCartItemList([...cartItemList,id])
    // }
    dispatch(addItem(item));
    
  };

  const removeItemFromcart = () => {
    dispatch(removeItem());
  };

  // const fullDescription = `Centre loaded with Molten Cheese & topped with Chicken Keema & Red Paprika with our spicy Peri Peri Sauce *Contains non-edible container under the Pizza`;
  

  return (
    <>
      {details.map((item) => (
        <div key={item?.card?.info?.id} data-testid="food-items">
          <div className="flex items-center justify-between gap-2">
            <div className="">
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
                  {/* {fullDescription} */}
                  {item?.card?.info?.description}
                </p>
              </div>
              <div
                className="md:hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight:
                    activeItem === item?.card?.info?.id ? "auto" : "60px",
                }}
              >
                <p
                  className="text-xs font-light md:text-sm text-zinc-800 transition ease-in-out delay-150 "
                  onClick={() => showFullDescription(item?.card?.info?.id)}
                >
                  {activeItem === item?.card?.info?.id
                    ? item?.card?.info?.description
                    : item?.card?.info?.description.substring(0, 58)}
                  <span className="md:hidden font-semibold">
                    {" "}
                    {activeItem === item?.card?.info?.id ? "Less" : "more.."}
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
              {cartItemList.includes(item?.card?.info?.id)? (
                
                <button className="border bg-white text-green-500 shadow-lg rounded-lg py-2" onClick={()=>navigate('/cart')}>
                  Go to cart
                </button>
              ) : (
                <button
                  className="border bg-white text-green-500 shadow-lg rounded-lg py-2"
                  onClick={() => AddItemToCart(item,item?.card?.info?.id)}
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
