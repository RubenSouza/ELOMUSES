import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import Login from "./pages/Login";
import Register from "./pages/Register";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./redux/features/userLogged";
import toast from "react-hot-toast";
import Main from "./pages/Main";
const URL = import.meta.env.VITE_API_URL;

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.userLogged.user);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const darkMode = useSelector((state: any) => state.darkMode.mode);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(false);

    if (user !== null) {
      const jsonUser = JSON.parse(user);
      const decodedToken: any = jwtDecode(jsonUser?.accessToken);

      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(setUser(null));
      } else {
        axios
          .post(
            `${URL}/users/admin/verify-token`,
            {},
            {
              headers: {
                Authorization: `Bearer ${jsonUser.accessToken}`,
              },
            }
          )
          .then(response => {
            if (!response.data.success === true) {
              dispatch(setUser(null));
              toast.error("Você não é um administrador.");
            }
          })
          .catch(() => {
            dispatch(setUser(null));
            toast.error("Usuário não autorizado");
          });
      }
    }
  }, [user, isLoading, dispatch, location]);

  if (isLoading) return <Loading />;
  else {
    return (
      // <div className={`${darkMode === "dark" ? "dark" : ""}`}>
      <div>
        <div
          className="dark:bg-primary-500 h-screen max-h-screen 
        text-primary-600 dark:text-primary-100"
        >
          {user ? (
            <Routes>
              <Route path="/*" element={<Main />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          )}
        </div>
      </div>
    );
  }
}

export default App;
