import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CashType } from "../../api/cashApi";

type initialStateType = {
  cashList: CashType[];
  totalIncome: number;
  income: number[];
  totalExpenses: number;
  expenses: number[];
};
const initialState: initialStateType = {
  cashList: [],
  totalIncome: 0,
  income: [],
  totalExpenses: 0,
  expenses: [],
};

const cashSlice = createSlice({
  name: "cash",
  initialState: initialState,
  reducers: {
    setIncomeList(state, action: PayloadAction<CashType[]>) {
      state.cashList = action.payload;
      state.cashList.reverse();
      state.income = state.cashList.map((item) => +item.cash);
      state.totalIncome = state.income.reduce((acc, item) => acc + item, 0);
      // console.log(state.income);
      // console.log(state.totalIncome);
    },
  },
});

export const { setIncomeList } = cashSlice.actions;

export default cashSlice.reducer;
