import { NavLink, Route, Routes } from "react-router-dom";
import Classes from "./Classes";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Student as StudentType } from "../types";
import { getStudentById } from "../utils/students";

const Student = () => {
  const activeStyle =
    "text-blue-600 border-b-2 border-blue-600 text-base font-semibold px-6  py-3";
  const inactiveStyle =
    "transition ease-in-out delay-100 hover:scale-105 px-6 py-2 text-slate-400 font-normal";

  const [student, setStudent] = useState<StudentType>({} as StudentType);
  const [contract, setContract] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<string>("");
  const studentId = window.location.pathname.split("/")[3];

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const student = await getStudentById(studentId);
        setStudent(student);
      } catch (error) {
        toast.error("Erro ao buscar aluno");
      }
    };
    const fetchContract = async () => {
      switch (student?.contract) {
        case 0:
          setContract("Inativo");
          break;
        case 1:
          setContract("Mensal");
          break;
        case 3:
          setContract("Trimestral");
          break;
        case 6:
          setContract("Semestral");
          break;
        case 12:
          setContract("Anual");
          break;
        default:
          setContract("");
          break;
      }
    };
    const fetchIsAdmin = async () => {
      if (student?.isAdmin) {
        setIsAdmin("Administrador");
      } else {
        setIsAdmin("Aluno");
      }
    };
    fetchStudent();
    fetchContract();
    fetchIsAdmin();
  }, [studentId, student?.contract, student?.isAdmin]);

  console.log(student);

  return (
    <div className="flex flex-col">
      {/* student details */}
      <div
        className="bg-white h-[200px] flex items-center 
       px-10 2xl:px-14 py-6 rounded-t-xl shadow-md w-full justify-between"
      >
        <div className="w-full">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-300 rounded-full h-20 w-20" />
            <div className="">
              <p className="font-semibold text-lg">{student?.name}</p>
              <p className="text-slate-400 text-sm">{student?.email}</p>
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
                <p>
                  {student?.responsible?.split(" ")[0]}{" "}
                  {student?.responsible?.split(" ")[1]}
                </p>
                <p>{student?.phone}</p>
                <p>{student?.profession}</p>
                <p>
                  {new Date(student?.birthDate).toLocaleDateString("pt-BR")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full ">
          <div className="w-[1px] h-full bg-slate-300 rounded-md" />
          <div className="flex flex-col h-full justify-between pb-4 pl-6 pr-4">
            <div className="flex flex-col h-full space-y-3">
              <h2 className="uppercase text-slate-400 text-sm">Endereço</h2>
              <p className="text-sm font-semibold">
                {student?.address} - {student?.number}, {student?.neighborhood},
                {student?.city} - {student?.state}
              </p>
            </div>
            <div className="flex justify-between ">
              <div>
                <p className="font-semibold text-xl">{contract}</p>
                <p className="text-sm text-slate-400">Plano</p>
              </div>
              <div>
                <p className="font-semibold text-xl">{student?.status}</p>
                <p className="text-sm text-slate-400">Status</p>
              </div>
              <div>
                <p className="font-semibold text-xl">{isAdmin}</p>
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
