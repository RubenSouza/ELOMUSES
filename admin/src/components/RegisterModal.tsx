import { SlotEvent, Student } from "../types";

type Props = {
  students: Student[];
  handleAddEvent: () => void;
  selectedSlot: SlotEvent | null;
};

const RegisterModal = ({ students, handleAddEvent, selectedSlot }: Props) => {
  return (
    <>
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
              defaultValue={selectedSlot?.start.toISOString().substr(0, 10)}
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
              defaultValue={selectedSlot?.start.toISOString().substr(11, 5)}
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
              defaultValue={selectedSlot?.start.toISOString().substr(0, 10)}
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
              defaultValue={selectedSlot?.start.toISOString().substr(11, 5)}
            />
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Adicionar evento
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterModal;
