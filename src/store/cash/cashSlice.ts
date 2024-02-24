import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CashType } from "../../api/cashApi";

type initialStateType = {
  cash: CashType[];
};
const initialState: initialStateType = {
  cash: [],
};

const cashSlice = createSlice({
  name: "cash",
  initialState: initialState,
  reducers: {
    setCashList(state, action: PayloadAction<CashType[]>) {
      state.cash.push(action.payload);
    },
  },
});

export const { setCashList } = cashSlice.actions;

export default cashSlice.reducer;
