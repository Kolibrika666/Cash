import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CashType } from "../../api/cashApi";

type initialStateType = {
  cashList: CashType[];
  balance: number;
  totalIncome: number[];
  income: number;
};
const initialState: initialStateType = {
  cashList: [],
  balance: 0,
  totalIncome: [],
  income: 0,
};

const cashSlice = createSlice({
  name: "cash",
  initialState: initialState,
  reducers: {
    setCashList(state, action: PayloadAction<CashType[]>) {
      state.cashList = action.payload;
    },

    setCashSum(state, action: PayloadAction<number>) {
      state.totalIncome.push(action.payload);
      state.totalIncome.reduce((acc, item) => acc + item, 0);
    },
  },
});

export const { setCashList, setCashSum } = cashSlice.actions;

export default cashSlice.reducer;
