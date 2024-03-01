import { Route, Routes } from "react-router-dom";
import TicketMenu from "../components/TicketMenu";
import Pending from "./Pending";
import Confirmed from "./Confirmed";
import Cancelled from "./Cancelled";
import SearchBar from "../components/SearchBar";

const Tickets = () => {
  return (
    <div>
      {/* Bottom menu details */}
      <TicketMenu />
      <div className="mt-5">
        <SearchBar />
      </div>
      {/* Routes */}
      <div>
        <Routes>
          <Route path="/" element={<Pending />} />
          <Route path="/confirmed" element={<Confirmed />} />
          <Route path="/cancelled" element={<Cancelled />} />
        </Routes>
      </div>
    </div>
  );
};

export default Tickets;
