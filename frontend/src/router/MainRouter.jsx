import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MainLayouts from "../layouts/MainLayouts";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainLayouts}>
            <Route index Component={Home} />
            {/* test data */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
