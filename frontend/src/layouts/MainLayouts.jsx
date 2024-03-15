import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
const MainLayouts = () => {
  return (
    <div className="pl-20 pr-20">
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
