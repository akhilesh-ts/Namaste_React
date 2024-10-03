import React from "react";
import { useSelector } from "react-redux";
import CartItemDetails from "../component/Body/CartItemDetails";
import CartOrderSummary from "../component/Body/CartOrderSummary";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <section className=" py-8 antialiased dark:bg-gray-900 md:py-16 ">
      {cartItems.length === 0 ? (
        <p>cart is empty</p>
      ) : (
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 ">
            <div   className="w-full lg:w-2/3 xl:w-3/4 ">
              <div  className="space-y-6 max-h-96 overflow-y-auto scrollbar-hide">
                {cartItems.map((item,index) => (
                  <CartItemDetails key={index} items={item} />
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
  );
};

export default Cart;
