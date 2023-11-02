import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../app/types/types";

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    items: [] as Product[],
  },
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.items.push(action.payload);
    },
    remove: (state, action) => {
      const indexToRemove = action.payload;
      state.items.splice(indexToRemove, 1);
    },
  },
});

export const { add, remove } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
