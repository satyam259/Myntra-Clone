import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import bagSlice from "./bagSlice";
import fetchStatusSlice from "./fetchStatusSlice";
const myntraStore = configureStore({
  reducer: {
    Allitems: itemsSlice.reducer,
    bag: bagSlice.reducer,
    fetch: fetchStatusSlice.reducer,
  },
});

export default myntraStore;
