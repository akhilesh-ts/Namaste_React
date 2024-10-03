import React from "react";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { CAROUSEL_IMAGE_URL } from "../../utils/constants";
import { addItem,removeItem,deleteItem } from "../../utils/slice/cartSlice";
import { useDispatch } from "react-redux";


const CartItemDetails = ({items}) => {
 

 
  const dispatch=useDispatch()

  const addItemToCart=(items)=>{
    dispatch(addItem(items))
  }

  const removeItemFromCart=(items)=>{
    dispatch(removeItem(items))
  }


  const deleteItemFromCart=(items)=>{

    dispatch(deleteItem(items))
  }

  return (
    <div >
      <div  className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6 mb-2 ">
        <div  className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
          <div className="shrink-0 md:order-1">
            <img
              className="h-20 w-20 dark:hidden rounded-lg"
              src={`${CAROUSEL_IMAGE_URL}${items.newItem?.card?.info?.imageId}`}
              alt="imac image"
            />
          </div>

          {/* <label for="counter-input" className="sr-only">
            Choose quantity:
          </label> */}
          <div  className="flex items-center justify-between md:order-3 md:justify-end">
            <div className="flex items-center">
              <div className=" inline-flex  rounded-md shadow-sm ">
                <button className="px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-s-lg " onClick={()=>removeItemFromCart(items?.newItem)} >
                  <HiMinus />
                </button>
                <p className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200">
                  {items?.quantity}
                </p>
                <button className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg "  onClick={()=>addItemToCart(items?.newItem)}>
                  <HiPlus />
                </button>
              </div>
            </div>
            <div className="text-end md:order-4 md:w-32">
              <p className="text-base font-bold text-gray-900 dark:text-white">

                ₹{items?.totalPrice/100}
              </p>
            </div>
          </div>

          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
            <p className="text-base font-medium text-gray-900  dark:text-white" data-testid="cart-details">
          {items?.newItem?.card?.info?.name}
            </p>

            <div className="flex items-center gap-4 ">
              {/* <button
                type="button"
                className="inline-flex items-center text-sm font-medium text-orange-400"
              >
                <Heart />
                Favorites
              </button> */}

              <button
                type="button"
                className="inline-flex items-center text-sm font-medium text-red-800 hover:underline dark:text-red-500"
                onClick={()=>deleteItemFromCart(items?.newItem)}
              >
                <RxCross2 />
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemDetails;
