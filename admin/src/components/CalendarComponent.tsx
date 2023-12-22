import React, { useState, useRef } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { MyEvent, BasicCalendarProps, SlotEvent } from "../types";
import { createClass, updateClass, deleteClass } from "../utils/classes";
import RegisterModal from "./RegisterModal";
import EditModal from "./EditModal";
import moment from "moment";

moment.tz.setDefault("UTC");

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

export const BasicCalendar: React.FC<BasicCalendarProps> = ({
  events,
  fetchClasses,
  students,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<SlotEvent | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<MyEvent | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const editModalRef = useRef<HTMLDivElement>(null);

  const handleEventClick = (event: MyEvent) => {
    setSelectedEvent(event);
    setOpenEditModal(true);
  };

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

    const startDateTime = moment.utc(`${inicio}T${horaInicio}`).format();
    const endDateTime = moment.utc(`${fim}T${horaFim}`).format();

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

  const handleUpdateEvent = async () => {
    setOpenEditModal(false);
    const aluno = (document.getElementById("editAluno") as HTMLSelectElement)
      .value;
    const tipo = (document.getElementById("editTipo") as HTMLSelectElement)
      .value;
    const sobre = (document.getElementById("editSobre") as HTMLInputElement)
      .value;
    const title = (document.getElementById("editTitle") as HTMLInputElement)
      .value;
    const assunto = (document.getElementById("editAssunto") as HTMLInputElement)
      .value;
    const status = (document.getElementById("editStatus") as HTMLSelectElement)
      .value;
    const inicio = (document.getElementById("editInicio") as HTMLInputElement)
      .value;
    const horaInicio = (
      document.getElementById("editHoraInicio") as HTMLInputElement
    ).value;
    const fim = (document.getElementById("editFim") as HTMLInputElement).value;
    const horaFim = (document.getElementById("editHoraFim") as HTMLInputElement)
      .value;

    const startDateTime = moment.utc(`${inicio}T${horaInicio}`).format();
    const endDateTime = moment.utc(`${fim}T${horaFim}`).format();

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

    if (selectedEvent) {
      await updateClass(formData, selectedEvent._id);
      fetchClasses();
    }
  };

  const handleDeleteEvent = async () => {
    setOpenEditModal(false);
    if (selectedEvent) {
      await deleteClass(selectedEvent._id);
      fetchClasses();
    }
  };

  const eventStyleGetter = (event: MyEvent) => {
    let style = {};

    if (event.tipo === "Aula única" && event.status === "Não realizada") {
      style = {
        backgroundColor: "#ac1eac",
        color: "white",
      };
    } else if (event.tipo === "Reposição" && event.status === "Não realizada") {
      style = {
        backgroundColor: "#FFA500",
        color: "white",
      };
    } else if (event.status === "Realizada") {
      style = {
        backgroundColor: "#008000",
        color: "white",
      };
    } else {
      style = {
        backgroundColor: "#6950fa",
        color: "white",
      };
    }

    return {
      style: style,
    };
  };

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
        onSelectEvent={handleEventClick}
        dayLayoutAlgorithm="no-overlap"
        eventPropGetter={eventStyleGetter}
      />

      {openModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-50 flex justify-center items-center"
          onMouseDown={e => {
            e.stopPropagation();
            if (
              modalRef.current &&
              !modalRef.current.contains(e.target as Node)
            ) {
              handleCloseModal();
            }
          }}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-md w-full flex flex-col items-center justify-center  max-h-[600px]"
            ref={modalRef}
          >
            <RegisterModal
              students={students}
              selectedSlot={selectedSlot}
              handleAddEvent={handleAddEvent}
            />
          </div>
        </div>
      )}

      {openEditModal && selectedEvent && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-50 flex 
            justify-center items-center"
          onMouseDown={e => {
            e.stopPropagation();
            if (
              editModalRef.current &&
              !editModalRef.current.contains(e.target as Node)
            ) {
              setOpenEditModal(false);
            }
          }}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-md w-full flex flex-col items-center justify-center  max-h-[600px]"
            ref={editModalRef}
          >
            <EditModal
              students={students}
              selectedEvent={selectedEvent}
              handleUpdateEvent={handleUpdateEvent}
              handleDeleteEvent={handleDeleteEvent}
            />
          </div>
        </div>
      )}
    </div>
  );
};
