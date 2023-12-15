import React, { useState, useRef, useEffect } from "react";
import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { createClass, getClasses, getStudents } from "../utils/classes";

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

type Student = {
  _id: string;
  name: string;
};

interface BasicCalendarProps {
  events: MyEvent[];
  fetchClasses: () => Promise<void>;
  students: Student[];
}

moment.updateLocale("pt-br", {
  months:
    "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
      "_"
    ),
  monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
  weekdays: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
  weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
});

moment.locale("pt-br");
const localizer = momentLocalizer(moment);

const messages = {
  today: "Hoje",
  previous: "Anterior",
  next: "Próximo",
  month: "Mês",
  week: "Semana",
  day: "Dia",
};

const BasicCalendar: React.FC<BasicCalendarProps> = ({
  events,
  fetchClasses,
  students,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<{
    start: Date;
    end: Date;
  } | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  console.log(students);

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
    <div className="h-screen w-full text-base">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        views={["month", "week", "day"]}
        messages={messages}
        onSelectSlot={handleSelectSlot}
        dayLayoutAlgorithm="no-overlap"
      />

      {/* Modal para criar a aula */}

      {openModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div
            className="bg-white rounded-lg p-8 max-w-md w-full flex flex-col items-center justify-center  max-h-[600px]"
            ref={modalRef}
          >
            <h2 className="text-2xl font-bold">Cadastrar aula</h2>
            <form
              className="w-full space-y-2"
              onSubmit={e => {
                e.preventDefault();
                handleAddEvent();
              }}
            >
              {/* titulo */}
              <div className="">
                <label htmlFor="sobre" className="block text-sm font-bold ">
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
              {/* Aluno e tipo */}
              <div className="flex flex-row space-x-2">
                <div className="flex-1">
                  <label htmlFor="aluno" className="block text-sm font-bold ">
                    Aluno:
                  </label>
                  <select
                    id="aluno"
                    name="aluno"
                    className="border border-gray-400 rounded w-full "
                  >
                    {students.map(student => {
                      const names = student.name.split(" ");
                      const firstName = names[0];
                      const secondName = names.length > 1 ? names[1] : "";
                      const displayText = `${firstName} ${secondName}`;
                      return (
                        <option key={student._id} value={student._id}>
                          {displayText.trim()}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="flex-1">
                  <label htmlFor="tipo" className="block text-sm font-bold ">
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
              {/* Sobre */}
              <div className="">
                <label htmlFor="sobre" className="block text-sm font-bold">
                  Sobre:
                </label>
                <input
                  type="text"
                  id="sobre"
                  name="sobre"
                  className="border border-gray-400 rounded w-full p-2"
                  placeholder="Sobre a aula"
                />
              </div>
              {/* Assunto */}
              <div className="">
                <label htmlFor="sobre" className="block text-sm font-bold">
                  Assunto:
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  className="border border-gray-400 rounded w-full p-2"
                  placeholder="Assunto da aula"
                />
              </div>
              {/* Status */}
              <div className="">
                <label htmlFor="sobre" className="block text-sm font-bold">
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
              {/* Inicio  */}
              <div className="w-full flex flex-row space-x-2">
                <div className=" w-full">
                  <label htmlFor="sobre" className="block text-sm font-bold">
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
                <div className="w-full">
                  <label htmlFor="hora" className="block text-sm font-bold">
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
              {/* Fim */}
              <div className="w-full flex flex-row space-x-2">
                <div className="w-full">
                  <label htmlFor="sobre" className="block text-sm font-bold">
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
                <div className="w-full">
                  <label htmlFor="hora" className="block text-sm font-bold ">
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
              {/* Button */}
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
  const [students, setStudents] = useState<Student[]>([]);

  const fetchClasses = async () => {
    try {
      const classesData = await getClasses();
      setClasses(classesData);
      const studentsData = await getStudents();
      setStudents(studentsData);
    } catch (error) {
      console.error("Erro ao obter as aulas:", error);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div className="text-2xl font-black w-full h-screen">
      <BasicCalendar
        events={classes}
        fetchClasses={fetchClasses}
        students={students}
      />
    </div>
  );
};

export default CalendarPage;
