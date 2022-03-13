import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const initialState = {
  appdata: data,
  userCart: [],
  totalCartValue: 0,
};

const dataSlice = createSlice({
  name: "userActions",
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.userCart.length === 0) {
        state.userCart.push(action.payload);
      } else {
        const existingRecord = state.userCart.find(
          (cart) => cart.name === action.payload.name
        );

        if (existingRecord) {
          existingRecord.quantity =
            Number(existingRecord.quantity) + Number(action.payload.quantity);
          existingRecord.total += Number(action.payload.total);
        } else {
          state.userCart.push(action.payload);
        }
      }
    },
    remove: (state, action) => {},
  },
});

export const { add, remove } = dataSlice.actions;

export default dataSlice.reducer;
