import SearchBar from "../components/SearchBar";
import Users from "../components/Users";
import { useLocation } from "react-router-dom";
import SearchedUsers from "../components/SearchedUsers";

const Students = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search") || "";

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <SearchBar />
      </div>
      <div className="">{search ? <SearchedUsers /> : <Users />}</div>
    </div>
  );
};

export default Students;
