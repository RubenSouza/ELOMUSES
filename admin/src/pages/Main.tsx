import { Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import Home from "./Home";
import Students from "./Students";
import Navbar from "../components/Navbar";
import Schedule from "./Schedule";

const Main = () => {
  return (
    <div className="flex">
      <div className="border-r-2 border-r-slate-100 ">
        <Menu />
      </div>
      <div className="flex-1 bg-slate-50 px-8">
        <div className="">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
