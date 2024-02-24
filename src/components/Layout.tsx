import { NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "../store";

function Layout() {
  const balance = useAppSelector((store) => store.cash.balance);
  return (
    <>
      <header>
        <NavLink to="/balance">
          {" "}
          Баланс - <span>{balance}</span>
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
