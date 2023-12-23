import { Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import Home from "./Home";
import Students from "./Students";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="flex">
      <div className="">
        <Menu />
      </div>
      <div className="flex-1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
