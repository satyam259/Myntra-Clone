import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../components/item";

const itemsSlice = createSlice({
  name: "items",
  initialState: Item,
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});
export const itemActions = itemsSlice.actions;
export default itemsSlice;
