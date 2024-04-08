import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../components/item";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addTobag: (state, action) => {
      state.push(action.payload);
    },
    removeFrombag: (state, action) => {
      return state.filter((itemid) => itemid !== action.payload);
    },
  },
});
export const BagActions = bagSlice.actions;
export default bagSlice;
