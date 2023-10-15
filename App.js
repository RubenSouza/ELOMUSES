import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./pages/Home";
import { House, List, Bell } from "phosphor-react-native";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Menu"
          component={Home}
          options={{
            tabBarLabel: "Menu",
            tabBarIcon: ({ color }) => <List color={color} size={26} />,
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => <House color={color} size={26} />,
          }}
        />
        <Tab.Screen
          name="Notificações"
          component={Home}
          options={{
            tabBarLabel: "Notificações",
            tabBarIcon: ({ color }) => <Bell color={color} size={26} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
