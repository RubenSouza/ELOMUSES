import { useEffect, useState } from "react";
import { TicketData } from "../types";
import { useSelector } from "react-redux";
import {
  deleteTicket,
  getConfirmedTickets,
  getTotalConfirmedTickets,
  updateTicket,
} from "../utils/tickets";
import { IoIosArrowDown } from "react-icons/io";
import Paginate from "../components/Paginate";
import { TbTrashX } from "react-icons/tb";

const Confirmed = () => {
  const [data, setData] = useState<TicketData>();
  const [totalTickets, setTotalTickets] = useState(0);
  const [ticketClicked, setTicketClicked] = useState("");
  const [statusClicked, setStatusClicked] = useState(false);
  const page = useSelector((state: any) => state.querys.page);

  useEffect(() => {
    setTimeout(() => {
      const fetchTickets = async () => {
        try {
          const ticketsData = await getConfirmedTickets(page);
          setData(ticketsData);
        } catch (error) {
          console.error("Erro ao buscar ingressos:", error);
        }
      };
      fetchTickets();

      const fetchTotalTickets = async () => {
        try {
          const totalTickets = await getTotalConfirmedTickets();
          setTotalTickets(totalTickets);
        } catch (error) {
          console.error("Erro ao buscar total de ingressos:", error);
        }
      };
      fetchTotalTickets();
    }, 500);
  }, [page, statusClicked, ticketClicked, data]);

  const handleStatus = (ticket: string) => {
    setStatusClicked(!statusClicked);
    setTicketClicked(ticket);
  };

  const handleUpdate = async (id: string, status: string) => {
    setStatusClicked(false);
    setTicketClicked("");
    await updateTicket(id, status);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTicket(id);
    } catch (error) {
      console.error("Erro ao deletar ingresso:", error);
    }
  };

  return (
    <div className="space-y-5 py-5">
      <div>
        <h1 className="font-bold text-xl">
          {totalTickets} Ingressos confirmados
        </h1>
      </div>
      <div>
        <table className="w-full rounded-md bg-white shadow-sm">
          <thead className="text-left uppercase hidden md:table-header-group w-full">
            <tr className="">
              <th className="pt-5 px-8 pb-4 border-b border-primary-100 font-normal text-sm text-slate-400">
                Data de criação
              </th>
              <th className="pt-5 px-8 pb-4 border-b border-primary-100 font-normal text-sm text-slate-400">
                Aluno
              </th>
              <th className="pt-5 px-8 pb-4 border-b border-primary-100 font-normal text-sm text-slate-400">
                Quantidade de ingressos
              </th>

              <th className="pt-5 px-8 pb-4 border-b border-primary-100 font-normal text-sm text-slate-400">
                Total
              </th>
              <th className="pt-5 px-8 pb-4 border-b border-primary-100 font-normal text-sm text-slate-400">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.docs?.map(ticket => (
              <tr
                key={ticket?._id}
                className="border-t border-primary-100 flex flex-col md:table-row text-left w-full h-20 "
              >
                <td className="px-8">
                  {new Date(ticket?.createdAt).toLocaleDateString()}
                </td>
                <td className="px-8">{ticket?.aluno}</td>
                <td className="px-8">{ticket?.quantidade}</td>
                <td className="px-8">{ticket?.valor}R$</td>
                <td className="px-8 space-y-1">
                  <div
                    className="flex items-center justify-center bg-green-200/80 rounded-md w-[120px] py-2 space-x-2 cursor-pointer
                  text-green-600 text-sm "
                    onClick={() => handleStatus(ticket?._id)}
                  >
                    <p>{ticket?.status}</p>
                    <IoIosArrowDown className="w-4 h-4" />
                  </div>
                  {statusClicked && ticketClicked === ticket?._id ? (
                    <div className="absolute bg-white space-y-1">
                      <div
                        className=" flex items-center justify-center  bg-yellow-200/80 rounded-md w-[120px] py-2 space-x-2 cursor-pointer
                    text-yellow-600 text-sm hover:bg-yellow-300 z-20"
                        onClick={() => handleUpdate(ticket?._id, "Pendente")}
                      >
                        <p>Pendente</p>
                      </div>
                      <div
                        className=" flex items-center justify-center bg-red-200/80 rounded-md w-[120px] py-2 space-x-2 cursor-pointer
                  text-red-600 text-sm hover:bg-red-300 z-20"
                        onClick={() => handleUpdate(ticket?._id, "Cancelado")}
                      >
                        <p>Cancelado</p>
                      </div>
                    </div>
                  ) : null}
                </td>
                <td
                  className="px-8 cursor-pointer"
                  onClick={() => handleDelete(ticket?._id)}
                >
                  <TbTrashX className="w-6 h-6 text-slate-500 hover:text-red-300" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="py-5 px-5 w-full flex items-center justify-center">
        <div>
          <Paginate totalPages={data?.totalPages} />
        </div>
      </div>
    </div>
  );
};

export default Confirmed;
