import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { BiCalendarCheck, BiFile, BiHomeSmile } from "react-icons/bi";
import {
  BsClipboard2,
  BsClipboard2Check,
  BsClipboard2Data,
  BsClipboard2Fill,
  BsFillPeopleFill,
} from "react-icons/bs";

const Menu = () => {
  const activeStyle =
    "transition ease-in-out delay-100 hover:scale-105 bg-slate-200/50 border-button-100 rounded-lg w-full px-4 py-2";
  const inactiveStyle =
    "transition ease-in-out delay-100 hover:scale-105 px-4 py-2 text-slate-400 font-normal";

  return (
    <div className="py-6 mx-4 flex items-start flex-col w-[250px] space-y-4">
      <img src={logo} alt="Logo" className="w-44 m-auto" />
      <div className="font-semibold flex flex-col space-y-6 w-full">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <div className="flex items-center space-x-1">
            <BiHomeSmile className="w-5 h-5" />
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink
          to="/classes"
          end
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <div className="flex items-center space-x-1">
            <BiCalendarCheck className="w-5 h-5" />
            <p>Agenda</p>
          </div>
        </NavLink>
        <NavLink
          to="/students"
          end
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <div className="flex items-center space-x-1">
            <BsFillPeopleFill className="w-5 h-5" />
            <p>Alunos</p>
          </div>
        </NavLink>
        <NavLink
          to="/files"
          end
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <div className="flex items-center space-x-1">
            <BiFile className="w-5 h-5" />
            <p>Arquivos</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
