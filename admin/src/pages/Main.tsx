import { Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import Home from "./Home";
import Students from "./Students";
import Navbar from "../components/Navbar";
import Schedule from "./Schedule";
import AddStudent from "./AddStudent";
import Student from "./Student";
import Tickets from "./Tickets";

const Main = () => {
  return (
    <div className="flex">
      <div className="border-r-2 border-r-slate-100 ">
        <Menu />
      </div>
      <div className="flex-1 bg-slate-50 px-8 h-screen">
        <div className="">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/student/:id/*" element={<Student />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/tickets/*" element={<Tickets />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
