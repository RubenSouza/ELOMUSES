import { NavLink } from "react-router-dom";

const TicketMenu = () => {
  const activeStyle =
    "text-blue-600 border-b-2 border-blue-600 text-base font-semibold px-6  py-3";
  const inactiveStyle =
    "transition ease-in-out delay-100 hover:scale-105 px-6 py-2 text-slate-400 font-normal";

  return (
    <div className="h-full  w-full mt-[2px] py-3">
      <ul className="flex space-x-10">
        <li>
          <NavLink
            to={`/tickets`}
            end
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Pendente
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/tickets/confirmed`}
            end
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Confirmado
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/tickets/cancelled`}
            end
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Cancelado
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/tickets/students`}
            end
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Alunos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default TicketMenu;
