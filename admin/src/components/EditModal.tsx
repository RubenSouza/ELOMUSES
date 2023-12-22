import { MyEvent, Student } from "../types";

type Props = {
  students: Student[];
  selectedEvent: MyEvent | null;
  handleUpdateEvent: () => void;
  handleDeleteEvent: () => void;
};

const EditModal = ({
  students,
  selectedEvent,
  handleUpdateEvent,
  handleDeleteEvent,
}: Props) => {
  return (
    <>
      <h2 className="text-2xl font-bold">Aula</h2>
      <form className="w-full space-y-2" aria-disabled={true}>
        {/* titulo */}
        <div className="">
          <label htmlFor="sobre" className="block text-sm font-bold ">
            Titulo:
          </label>
          <input
            type="text"
            id="editTitle"
            name="titulo"
            className="border border-gray-400 rounded w-full p-2"
            placeholder="Sobre o evento"
            defaultValue={selectedEvent?.title}
          />
        </div>
        {/* Aluno e tipo */}
        <div className="flex flex-row space-x-2">
          <div className="flex-1">
            <label htmlFor="aluno" className="block text-sm font-bold ">
              Aluno:
            </label>
            <select
              id="editAluno"
              name="aluno"
              className="border border-gray-400 rounded w-full "
            >
              {students.map(student => {
                const names = student.name.split(" ");
                const firstName = names[0];
                const secondName = names.length > 1 ? names[1] : "";
                const displayText = `${firstName} ${secondName}`;
                return (
                  <option
                    key={student._id}
                    value={student._id}
                    selected={student._id === selectedEvent?.aluno}
                  >
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
              id="editTipo"
              name="tipo"
              className="border border-gray-400 rounded w-full"
              defaultValue={selectedEvent?.tipo}
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
            id="editSobre"
            name="sobre"
            className="border border-gray-400 rounded w-full p-2"
            placeholder="Sobre a aula"
            defaultValue={selectedEvent?.sobre}
          />
        </div>
        {/* Assunto */}
        <div className="">
          <label htmlFor="sobre" className="block text-sm font-bold">
            Assunto:
          </label>
          <input
            type="text"
            id="editAssunto"
            name="assunto"
            className="border border-gray-400 rounded w-full p-2"
            placeholder="Assunto da aula"
            defaultValue={selectedEvent?.assunto}
          />
        </div>
        {/* Status */}
        <div className="">
          <label htmlFor="sobre" className="block text-sm font-bold">
            Status:
          </label>
          <select
            id="editStatus"
            name="status"
            className="border border-gray-400 rounded w-full p-2"
            defaultValue={selectedEvent?.status}
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
              id="editInicio"
              name="inicio"
              className="border border-gray-400 rounded w-full p-2"
              defaultValue={selectedEvent?.start?.toISOString().substr(0, 10)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="hora" className="block text-sm font-bold">
              Hora:
            </label>
            <input
              type="time"
              id="editHoraInicio"
              name="horaInicio"
              className="border border-gray-400 rounded w-full p-2"
              step="1800"
              defaultValue={selectedEvent?.start?.toISOString().substr(11, 5)}
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
              id="editFim"
              name="fim"
              className="border border-gray-400 rounded w-full p-2"
              defaultValue={selectedEvent?.end?.toISOString().substr(0, 10)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="hora" className="block text-sm font-bold ">
              Hora:
            </label>
            <input
              type="time"
              id="editHoraFim"
              name="horaFim"
              className="border border-gray-400 rounded w-full p-2"
              step="1800"
              defaultValue={selectedEvent?.end?.toISOString().substr(11, 5)}
            />
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-between py-1">
          <button
            type="button"
            className="bg-red-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDeleteEvent}
          >
            Excluir evento
          </button>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleUpdateEvent}
          >
            Editar evento
          </button>
        </div>
      </form>
    </>
  );
};

export default EditModal;
