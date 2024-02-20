import { useEffect, useState } from "react";
import { getPaginatedStudents } from "../utils/students";
import { useSelector } from "react-redux";
import Paginate from "./Paginate";
import { StudentData } from "../types";
import { Link } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState<StudentData>();
  const page = useSelector((state: any) => state.querys.page);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const studentsData = await getPaginatedStudents(page);
        setData(studentsData);
      } catch (error) {
        console.error("Erro ao buscar alunos:", error);
      }
    };
    fetchStudents();
  }, [page]);

  return (
    <>
      {data?.docs?.length === 0 ? (
        <div className="w-full h-[80%] flex items-center justify-center ">
          <h1 className="text-lg font-bold">Não há alunos cadastrados</h1>
        </div>
      ) : (
        <table className="w-full rounded-md bg-white shadow-sm">
          <thead className="text-left uppercase hidden md:table-header-group w-full">
            <tr className="">
              <th className="pt-5 px-8 pb-4 border-b border-primary-100 font-normal text-sm text-slate-400">
                Nome
              </th>
              <th className="pt-5 px-8 pb-4 border-b border-primary-100 font-normal text-sm text-slate-400">
                Número de telefone
              </th>
              <th className="pt-5 px-8 pb-4 border-b border-primary-100 font-normal text-sm text-slate-400">
                Data de criação
              </th>
              <th className="pt-5 px-8 pb-4 border-b border-primary-100 font-normal text-sm text-slate-400">
                Opções
              </th>
            </tr>
          </thead>
          <tbody className="">
            {data?.docs?.map(student => (
              <tr
                key={student?._id}
                className="border-t border-primary-100 flex flex-col md:table-row text-left"
              >
                <td className="py-5 px-8">
                  <div className="flex items-center space-x-3">
                    <div>
                      {student?.profilePic ? (
                        <img
                          className="w-10 h-10 rounded-full"
                          src={student?.profilePic}
                          alt={student?.name}
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-blue-300 border border-slate-300"></div>
                      )}
                    </div>
                    <Link to={`/students/student/${student?._id}`}>
                      <div>
                        <p className="font-semibold ">{student?.name}</p>
                        <p className="text-sm text-slate-400">
                          {student?.email}
                        </p>
                      </div>
                    </Link>
                  </div>
                </td>
                <td className="py-5 px-8 ">{student?.phone}</td>
                <td className="py-5 px-8 ">{student?.createdAt}</td>
                <td className="py-5 px-8 flex space-x-1">
                  <p>edi</p>
                  <p>exc</p>
                  <p>blq</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="py-5 px-5 w-full flex items-center justify-center">
        <div>
          <Paginate totalPages={data?.totalPages} />
        </div>
      </div>
    </>
  );
};

export default Users;
