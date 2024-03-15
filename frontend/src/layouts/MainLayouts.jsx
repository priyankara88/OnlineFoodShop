import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";

const MainLayouts = () => {
  return (
    <div className="pl-40 pr-40">
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
