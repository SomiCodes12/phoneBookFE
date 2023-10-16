import { Outlet } from "react-router-dom";
import Header from "../Static/Header";
import Sider from "../Static/Sider";

const Layout = () => {
  return (
    <div className="w-full h-[100vh]">
      {/* <Header /> */}
    <div className="w-full flex">
    <div className="flex justify-between ">
        {/* <Sider /> */}
      </div>
      <div className="w-full flex justify-end">
        <div>
          <Outlet />
        </div>
    </div>
      </div>
    </div>
  );
};

export default Layout;
