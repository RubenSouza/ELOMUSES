import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { BiCalendarCheck, BiFile, BiHomeSmile } from "react-icons/bi";
import { IoTicket } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";

import { IoIosAddCircleOutline } from "react-icons/io";

const Menu = () => {
  const activeStyle =
    "transition ease-in-out delay-100 hover:scale-105 bg-slate-200/50 border-button-100 rounded-lg w-full px-8 md:px-4 py-2";
  const inactiveStyle =
    "transition ease-in-out delay-100 hover:scale-105 px-4 py-2 text-slate-400 font-normal";

  return (
    <div className="py-6 mx-4 flex items-start flex-col w-[50px] xl:w-[250px] space-y-4 text-xs xl:text-base">
      <img src={logo} alt="Logo" className="w-20 xl:w-44 m-auto" />
      <div className="font-semibold flex flex-col items-center xl:items-start space-y-6 w-full">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <div className="flex flex-col xl:flex-row items-center space-x-1">
            <BiHomeSmile className="w-5 h-5" />
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink
          to="/schedule"
          end
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <div className="flex flex-col xl:flex-row items-center space-x-1">
            <BiCalendarCheck className="w-5 h-5" />
            <p>Agenda</p>
          </div>
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <div className="flex flex-col xl:flex-row items-center space-x-1">
            <BsFillPeopleFill className="w-5 h-5" />
            <p>Alunos</p>
          </div>
        </NavLink>
        <NavLink
          to="/tickets"
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <div className="flex flex-col xl:flex-row items-center space-x-1">
            <IoTicket className="w-5 h-5" />
            <p>Ingressos</p>
          </div>
        </NavLink>
        <NavLink
          to="/add-student"
          end
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <div className="flex flex-col xl:flex-row items-center space-x-1">
            <IoIosAddCircleOutline className="w-5 h-5" />
            <p>Cadastrar aluno</p>
          </div>
        </NavLink>
        <NavLink
          to="/files"
          end
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <div className="flex flex-col xl:flex-row items-center space-x-1">
            <BiFile className="w-5 h-5" />
            <p>Arquivos</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
