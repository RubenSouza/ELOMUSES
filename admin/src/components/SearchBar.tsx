import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setIsSearching, setPage, setSearch } from "../redux/features/querys";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm === "") {
      searchParams.delete("search");
      dispatch(setIsSearching(false));
      navigate({ search: searchParams.toString() });
    } else {
      searchParams.set("search", searchTerm);
      searchParams.delete("page");
      dispatch(setIsSearching(true));
      dispatch(setPage(1));
      navigate({ search: searchParams.toString() });
    }
    dispatch(setSearch(searchTerm));
  }, [searchTerm]);

  return (
    <div>
      <div className="flex flex-row justify-start items-center bg-white rounded-md w-[250px] shadow-sm">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4 text-gray-400" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="bg-transparent border-none placeholder-gray-400 outline-none 
  text-sm w-full p-2 leading-8 transition-colors duration-200
  ease-in-out focus:ring-0"
          placeholder="Search..."
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
