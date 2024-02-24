import { NavLink, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { getIncomeData } from "../api/cashApi";
import { setIncomeList } from "../store/cash/cashSlice";

function Layout() {
  const sumExpenses = useAppSelector((store) => store.cash.totalExpenses);
  const sumIncome = useAppSelector((store) => store.cash.totalIncome);

  const dispatch = useAppDispatch();

  const getIncomeList = async () => {
    const data = await getIncomeData();
    dispatch(setIncomeList(data));
  };
  useEffect(() => {
    getIncomeList();
  }, []);

  return (
    <>
      <header>
        <NavLink to="/balance">
          {" "}
          Баланс - <span>{sumExpenses + sumIncome}</span>
        </NavLink>
        <NavLink to="/income">Доходы</NavLink>
        <NavLink to="/expenses">Расходы</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
