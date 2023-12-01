import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Routes from "./components/Routes";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
