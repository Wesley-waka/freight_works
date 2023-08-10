import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
