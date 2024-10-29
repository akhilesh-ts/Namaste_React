import React from "react";
import { useSelector } from "react-redux";
import CartItemDetails from "../component/Body/CartItemDetails";
import CartOrderSummary from "../component/Body/CartOrderSummary";
import { useUser } from "@clerk/clerk-react";
import Login from "../component/Body/Login";
import { Link } from "react-router-dom";
import empty from '../asset/emptyCart.png';


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const { isSignedIn} = useUser();

  return isSignedIn ? (
    <section className=" py-8 antialiased dark:bg-gray-900 md:py-16 ">
      {cartItems.length === 0 ? (
        <div className="flex items-center justify-center h-auto p-3 ">
        <div className="bg-white shadow-lg rounded-lg p-5 max-w-md w-full transition-transform transform hover:scale-105 duration-300 flex flex-col items-center">
          <div className="mb-3 w-28 h-28 object-contain  p-4 rounded-full shadow-xl" >
          <img
            src={empty}
            alt="Login Prompt"
          />
          </div> 
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Oops!</h2>
            <p className="text-md text-gray-600 mb-6">
            Looks like you haven't added anything to your cart yet !
            </p>
           <Link to="/" className="p-2 bg-orange-400 rounded-lg text-white">Discover Deals  !</Link>
          </div>
        </div>
      </div>
      
      ) : (
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 ">
            <div className="w-full lg:w-2/3 xl:w-3/4 ">
              <div className="space-y-6 max-h-96 overflow-y-auto scrollbar-hide">
                {cartItems.map((item, index) => (
                  <CartItemDetails key={index} items={item}/>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-6 lg:mt-0 lg:w-1/3 xl:w-1/4 space-y-6 ">
              <CartOrderSummary />
            </div>
          </div>
        </div>
      )}
    </section>
  ) : (
    <div className="flex items-center justify-center h-96 p-2">
  <div className="bg-white shadow-lg rounded-lg p-4 max-w-md w-full transition-transform transform hover:scale-105 duration-300 flex flex-col items-center">
    <div className="mb-3 w-28 h-28 object-contain  p-4 rounded-full shadow-xl" >
    <img
      src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_1280.png"
      alt="Login Prompt"
    />
    </div>
    
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Oops!</h2>
      <p className="text-md text-gray-600 mb-2">
        To explore your cart, please log in to your account.
      </p>
      <Login />
    </div>
  </div>
</div>

  );
};

export default Cart;
