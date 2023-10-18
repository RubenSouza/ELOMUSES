import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { House, List, Bell } from "phosphor-react-native";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Notifications from "./pages/Notifications";

import CalendarPage from "./pages/Calendar";
import Configs from "./pages/Configs";
import Invoices from "./pages/Invoices";
import Metronome from "./pages/Metronome";
import Replacement from "./pages/Replacement";
import Schedule from "./pages/Schedule";
import Material from "./pages/Material";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabStack() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: () => <List size={26} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <House size={26} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Notificações",
          tabBarIcon: () => <Bell size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Página Inicial">
        <Stack.Screen
          name="Página Inicial"
          component={TabStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Calendário Escolar" component={CalendarPage} />
        <Stack.Screen name="Configurações" component={Configs} />
        <Stack.Screen name="Faturas" component={Invoices} />
        <Stack.Screen name="Metrônomo" component={Metronome} />
        <Stack.Screen name="Aulas a Repor" component={Replacement} />
        <Stack.Screen name="Agenda" component={Schedule} />
        <Stack.Screen name="Material Didático" component={Material} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
