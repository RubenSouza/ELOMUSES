import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setPage } from "../redux/features/querys";

type Props = {
  totalPages: number | undefined;
};

const Paginate = ({ totalPages }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event.preventDefault();
    searchParams.set("page", value.toString());
    navigate(`?${searchParams.toString()}`);
  };

  useEffect(() => {
    dispatch(setPage(currentPage));
  }, [currentPage]);

  return (
    <Stack spacing={2} className="w-full">
      <Pagination
        count={totalPages}
        shape="rounded"
        color="primary"
        page={currentPage}
        onChange={handlePageChange}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "slategray",
          },
          "& .Mui-selected": {
            color: "white",
            bgcolor: "blue.100",
          },
        }}
      />
    </Stack>
  );
};

export default Paginate;
