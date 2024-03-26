import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Routes from "./components/Routes";
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider swipeEnabled={true} offset={50}>
        <Routes />
      </ToastProvider>
    </Provider>
  );
}
