import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setSort } from "../redux/features/querys";

const SortBy = () => {
  const [sortBy, setSortBy] = useState("Mais Novo");
  const [clicked, setClicked] = useState(false);
  const [sortOptions] = useState(["Mais Novo", "Mais Antigo"]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSort(sortBy));
  }, [dispatch, sortBy]);

  return (
    <div>
      <div
        className="bg-white py-3 px-6 rounded-md shadow-sm flex flex-row items-center cursor-pointer
    text-slate-800"
        onClick={() => setClicked(!clicked)}
      >
        <div>{sortBy}</div>
        <div className="pl-2">
          <IoIosArrowDown />
        </div>
      </div>

      {clicked && (
        <div
          className=" rounded-md shadow-sm flex flex-row items-center cursor-pointer
       text-slate-800 text-sm justify-center  absolute "
        >
          <div className="flex flex-col w-full">
            {sortOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  setSortBy(option);
                  setClicked(false);
                }}
                className={`py-2 px-9 bg-white/30 hover:bg-slate-100 ${
                  option === sortBy && "text-slate-800 font-bold"
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortBy;
