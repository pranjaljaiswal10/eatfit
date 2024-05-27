import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    rating: false,
    lessthan: false,
    between: false,
    pureVeg:false,
    offers:false,
    fastDelivery:false,
    sort: "",
    searchTxt: "",
  },
  reducers: {
    toggleRating: (state) => {
      state.rating = !state.rating;
    },
    toggleLessthan: (state) => {
      state.lessthan = !state.lessthan;
    },
    toggleBetween: (state) => {
      state.between = !state.between;
    },
    toggleOffers:(state)=>{
     state.offers=!state.offers;
    },
    togglePureVeg:(state)=>{
    state.pureVeg=!state.pureVeg
    },
    toggleFastDelivery:(state)=>{
    state.fastDelivery=!state.fastDelivery
    },
    sortBy: (state, action) => {
      state.sort = action.payload;
    },
    addSearchText: (state, action) => {
      state.searchTxt = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {
  toggleBetween,
  toggleLessthan,
  toggleRating,
  toggleOffers,
  togglePureVeg,
  toggleFastDelivery,
  sortBy,
  addSearchText,
} = filterSlice.actions;
