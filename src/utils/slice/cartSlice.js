import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    quantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const id = newItem?.card?.info?.id;
      const existingItem = state.items.find(
        (item) => item?.newItem?.card?.info?.id === id
      );

      if (!existingItem) {
        state.items.push({
          newItem,
          quantity: 1,
          totalPrice: newItem?.card?.info?.price
            ? newItem?.card?.info?.price
            : newItem?.card?.info?.defaultPrice,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem?.card?.info?.price
          ? newItem?.card?.info?.price
          : newItem?.card?.info?.defaultPrice;
      }
      state.totalAmount += newItem?.card?.info?.price
        ? newItem?.card?.info?.price
        : newItem?.card?.info?.defaultPrice;
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const id = item?.card?.info?.id;
      // console.log(item);

      const existing = state.items.find(
        (item) => item?.newItem?.card?.info?.id === id
      );
      // console.log(existing);

      if (existing) {
        state.totalAmount -= item?.card?.info?.price
          ? item?.card?.info?.price
          : item?.card?.info?.defaultPrice;

        if (existing.quantity === 1) {
          state.items = state.items.filter(
            (item) => item?.newItem?.card?.info?.id != id
          );
        } else {
          existing.quantity--;
          existing.totalPrice -= item?.card?.info?.price
            ? item?.card?.info?.price
            : item?.card?.info?.defaultPrice;
        }
      }
    },
    deleteItem: (state, action) => {
      const item = action.payload;
      const id = item?.card?.info?.id;

      const existing = state.items.find(
        (item) => item?.newItem?.card?.info?.id === id
      );

      if (existing) {
        existing.quantity = null;
        state.totalAmount -= existing.totalPrice;

        state.items = state.items.filter(
          (item) => item?.newItem?.card?.info?.id != id
        );
      }
    },
  },
});
export const { addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
