import { NavLink, Route, Routes } from "react-router-dom";
import Classes from "./Classes";

const Student = () => {
  const activeStyle =
    "text-blue-600 border-b-2 border-blue-600 text-base font-semibold px-6  py-3";
  const inactiveStyle =
    "transition ease-in-out delay-100 hover:scale-105 px-6 py-2 text-slate-400 font-normal";

  const studentId = window.location.pathname.split("/")[3];

  return (
    <div className="flex flex-col">
      {/* student details */}
      <div
        className="bg-white h-[200px] flex items-center 
       px-14 py-6 rounded-t-xl shadow-md w-full justify-between"
      >
        <div className="w-full">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-300 rounded-full h-20 w-20" />
            <div className="">
              <p className="font-semibold text-lg">Rúben Eliel</p>
              <p className="text-slate-400 text-sm">
                rubem.eliel2012@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full">
          <div className="w-[1px] h-full bg-slate-300 rounded-md" />
          <div className="text-sm space-y-3 pl-6">
            <h2 className="uppercase text-slate-400 text-sm">
              Informação pessoal
            </h2>
            <div className="flex w-full space-x-14">
              <div className="space-y-3">
                <p>Responsável</p>
                <p>Telefone</p>
                <p>Profissão</p>
                <p>Data de nascimento</p>
              </div>
              <div className="space-y-3 font-medium">
                <p>Rúben Eliel</p>
                <p>83918387223</p>
                <p>Médico</p>
                <p>14/08/2000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full">
          <div className="w-[1px] h-full bg-slate-300 rounded-md" />
          <div className="flex flex-col h-full justify-between pb-4 pl-6 pr-6">
            <div className="flex flex-col h-full space-y-3">
              <h2 className="uppercase text-slate-400 text-sm">Endereço</h2>
              <p className="text-sm font-semibold">
                Avenida São José - 2244, Gameleira, Alcantil - PB
              </p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="font-semibold text-xl">Mensal</p>
                <p className="text-sm text-slate-400">Plano</p>
              </div>
              <div>
                <p className="font-semibold text-xl">Liberado</p>
                <p className="text-sm text-slate-400">Status</p>
              </div>
              <div>
                <p className="font-semibold text-xl">Aluno</p>
                <p className="text-sm text-slate-400">Permissão</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom details menu */}
      <div className="h-full bg-white shadow-lg w-full mt-[2px] px-16 py-3 rounded-b-xl">
        <ul className="flex space-x-10">
          <li>
            <NavLink
              to={`/students/student/${studentId}`}
              end
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
            >
              Aulas
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/students/student/${studentId}/payments`}
              end
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
            >
              Pagamentos
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/students/student/${studentId}/files`}
              end
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
            >
              Materiais didáticos
            </NavLink>
          </li>
        </ul>
      </div>

      {/* /Routes */}
      <div>
        <Routes>
          <Route path="/" element={<Classes />} />
          <Route path="/payments" element={<Classes />} />
          <Route path="/files" element={<Classes />} />
        </Routes>
      </div>
    </div>
  );
};

export default Student;
