import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <NavLink to="/balance">
          {" "}
          Баланс - <span>1000</span>
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
