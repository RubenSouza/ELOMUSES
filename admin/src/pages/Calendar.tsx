import React, { useState, useRef, useEffect } from "react";
import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { createClass, getClasses } from "../utils/classes";

interface MyEvent extends Event {
  title: string;
  aluno: string;
  sobre: string;
  tipo: string;
  assunto: string;
  status: string;
  data: string;
  hora: string;
}

interface BasicCalendarProps {
  events: MyEvent[];
  fetchClasses: () => Promise<void>;
}

const localizer = momentLocalizer(moment);

const BasicCalendar: React.FC<BasicCalendarProps> = ({
  events,
  fetchClasses,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<{
    start: Date;
    end: Date;
  } | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSelectSlot = (slotInfo: { start: Date; end: Date }) => {
    setSelectedSlot(slotInfo);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedSlot(null);
  };

  const handleAddEvent = async () => {
    handleCloseModal();

    const aluno = (document.getElementById("aluno") as HTMLSelectElement).value;
    const tipo = (document.getElementById("tipo") as HTMLSelectElement).value;
    const sobre = (document.getElementById("sobre") as HTMLInputElement).value;
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const assunto = (document.getElementById("assunto") as HTMLInputElement)
      .value;
    const status = (document.getElementById("status") as HTMLSelectElement)
      .value;
    const inicio = (document.getElementById("inicio") as HTMLInputElement)
      .value;
    const horaInicio = (
      document.getElementById("horaInicio") as HTMLInputElement
    ).value;
    const fim = (document.getElementById("fim") as HTMLInputElement).value;
    const horaFim = (document.getElementById("horaFim") as HTMLInputElement)
      .value;

    const startDateTime = moment(`${inicio}T${horaInicio}`).toDate();

    const endDateTime = moment(`${fim}T${horaFim}`).toDate();

    const formData = {
      aluno,
      tipo,
      title,
      sobre,
      assunto,
      status,
      start: startDateTime,
      end: endDateTime,
    };

    await createClass(formData);
    fetchClasses();
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (openModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal]);

  return (
    <div className="h-screen w-full">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
      />

      {openModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div
            className="bg-white rounded-lg p-8 max-w-md w-full flex flex-col items-center justify-center space-y-2"
            ref={modalRef}
          >
            <h2 className="text-2xl font-bold">Cadastrar aula</h2>
            <form
              className="w-full"
              onSubmit={e => {
                e.preventDefault();
                handleAddEvent();
              }}
            >
              <div className="mb-4">
                <label htmlFor="sobre" className="block text-sm font-bold mb-2">
                  Titulo:
                </label>
                <input
                  type="text"
                  id="title"
                  name="titulo"
                  className="border border-gray-400 rounded w-full p-2"
                  placeholder="Sobre o evento"
                />
              </div>
              <div className="flex flex-row space-x-2">
                <div className="mb-4">
                  <label
                    htmlFor="aluno"
                    className="block text-sm font-bold mb-2"
                  >
                    Aluno:
                  </label>
                  <select
                    id="aluno"
                    name="aluno"
                    className="border border-gray-400 rounded w-full"
                  >
                    <option value="">Selecione um aluno</option>
                    <option value="656f1d21f57539f0324420f4">Aluno 1</option>
                    <option value="aluno2">Aluno 2</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="tipo"
                    className="block text-sm font-bold mb-2"
                  >
                    Tipo:
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    className="border border-gray-400 rounded w-full"
                  >
                    <option value="Aula única">Aula única</option>
                    <option value="Aula recorrente">Aula recorrente</option>
                    <option value="Reposição">Reposição</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="sobre" className="block text-sm font-bold mb-2">
                  Sobre:
                </label>
                <input
                  type="text"
                  id="sobre"
                  name="sobre"
                  className="border border-gray-400 rounded w-full p-2"
                  placeholder="Sobre o evento"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="sobre" className="block text-sm font-bold mb-2">
                  Assunto:
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  className="border border-gray-400 rounded w-full p-2"
                  placeholder="Sobre o evento"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="sobre" className="block text-sm font-bold mb-2">
                  Status:
                </label>
                <select
                  id="status"
                  name="status"
                  className="border border-gray-400 rounded w-full p-2"
                >
                  <option value="Não realizada">Não realizada</option>
                  <option value="Realizada">Realizada</option>
                </select>
              </div>
              <div className="w-full flex flex-row space-x-2">
                <div className="mb-4 w-full">
                  <label
                    htmlFor="sobre"
                    className="block text-sm font-bold mb-2"
                  >
                    Inicio:
                  </label>
                  <input
                    type="date"
                    id="inicio"
                    name="inicio"
                    className="border border-gray-400 rounded w-full p-2"
                    defaultValue={selectedSlot?.start
                      .toISOString()
                      .substr(0, 10)}
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="hora"
                    className="block text-sm font-bold mb-2"
                  >
                    Hora:
                  </label>
                  <input
                    type="time"
                    id="horaInicio"
                    name="horaInicio"
                    className="border border-gray-400 rounded w-full p-2"
                    step="1800"
                    defaultValue={selectedSlot?.start
                      .toISOString()
                      .substr(11, 5)}
                  />
                </div>
              </div>
              <div className="w-full flex flex-row space-x-2">
                <div className="mb-4 w-full">
                  <label
                    htmlFor="sobre"
                    className="block text-sm font-bold mb-2"
                  >
                    Fim:
                  </label>
                  <input
                    type="date"
                    id="fim"
                    name="fim"
                    className="border border-gray-400 rounded w-full p-2"
                    defaultValue={selectedSlot?.start
                      .toISOString()
                      .substr(0, 10)}
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="hora"
                    className="block text-sm font-bold mb-2"
                  >
                    Hora:
                  </label>
                  <input
                    type="time"
                    id="horaFim"
                    name="horaFim"
                    className="border border-gray-400 rounded w-full p-2"
                    step="1800"
                    defaultValue={selectedSlot?.start
                      .toISOString()
                      .substr(11, 5)}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Adicionar Evento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const CalendarPage = () => {
  const [classes, setClasses] = useState<MyEvent[]>([]);

  const fetchClasses = async () => {
    try {
      const classesData = await getClasses();
      console.log("classesData:", classesData);
      setClasses(classesData);
    } catch (error) {
      console.error("Erro ao obter as aulas:", error);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div className="text-2xl font-black w-full h-screen">
      <BasicCalendar events={classes} fetchClasses={fetchClasses} />
    </div>
  );
};

export default CalendarPage;
