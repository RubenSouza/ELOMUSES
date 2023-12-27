import { useLocation } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const location = useLocation();

  const path = location.pathname.replace("/", "");

  let title;

  switch (path) {
    case "":
      title = "Dashboard";
      break;
    case "schedule":
      title = "Agenda";
      break;
    case "students":
      title = "Alunos";
      break;
    case "files":
      title = "Arquivos";
      break;
    default:
      title = "Dashboard";
      break;
  }

  return (
    <div className="my-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex space-x-3 items-center">
        <div className="cursor-pointer">
          <IoMdNotificationsOutline className="w-6 h-6" />
        </div>
        <div className="cursor-pointer">
          <div className="bg-blue-300 rounded-full h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
