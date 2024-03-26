import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CaretLeft } from "phosphor-react-native";
import { PaperProvider, Drawer as PaperDrawer } from "react-native-paper";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Configs from "../pages/Configs";
import Invoices from "../pages/Invoices";
import Notifications from "../pages/Notifications";
import Metronome from "../pages/Metronome";
import Replacement from "../pages/Replacement";
import Schedule from "../pages/Schedule";
import Material from "../pages/Material";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HeaderBar from "./HeaderBar";

import { useSelector } from "react-redux";
import React, { useState } from "react";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const [active, setActive] = useState("Página Inicial");

  return (
    <PaperDrawer.Section className="my-10">
      <PaperDrawer.CollapsedItem
        label="Página Inicial"
        focusedIcon="home-variant"
        unfocusedIcon="home-variant-outline"
        active={active === "Página Inicial"}
        onPress={() => {
          setActive("Página Inicial");
          navigation.navigate("Página Inicial");
        }}
      />
      <PaperDrawer.CollapsedItem
        label="Agenda"
        focusedIcon="calendar-check"
        unfocusedIcon="calendar-check-outline"
        active={active === "Agenda"}
        onPress={() => {
          setActive("Agenda");
          navigation.navigate("Agenda");
        }}
      />

      <PaperDrawer.CollapsedItem
        label="Material Didático"
        focusedIcon="clipboard-text"
        unfocusedIcon="clipboard-text-outline"
        active={active === "Material Didático"}
        onPress={() => {
          setActive("Material Didático");
          navigation.navigate("Material Didático");
        }}
      />
      <PaperDrawer.CollapsedItem
        label="Aulas a Repor"
        focusedIcon="clock-alert"
        unfocusedIcon="clock-alert-outline"
        active={active === "Aulas a Repor"}
        onPress={() => {
          setActive("Aulas a Repor");
          navigation.navigate("Aulas a Repor");
        }}
      />
      <PaperDrawer.CollapsedItem
        label="Faturas"
        focusedIcon="currency-usd"
        unfocusedIcon="currency-usd"
        active={active === "Faturas"}
        onPress={() => {
          setActive("Faturas");
          navigation.navigate("Faturas");
        }}
      />
      {/* <PaperDrawer.CollapsedItem
        label="Calendário Escolar"
        focusedIcon="inbox"
        unfocusedIcon="inbox-outline"
        active={active === "Calendário Escolar"}
        onPress={() => {
          setActive("Calendário Escolar");
          navigation.navigate("Calendário Escolar");
        }}
      />
      <PaperDrawer.CollapsedItem
        label="Metrônomo"
        focusedIcon="inbox"
        unfocusedIcon="inbox-outline"
        active={active === "Metrônomo"}
        onPress={() => {
          setActive("Metrônomo");
          navigation.navigate("Metrônomo");
        }}
      /> */}
      <PaperDrawer.CollapsedItem
        label="Configurações"
        focusedIcon="cog"
        unfocusedIcon="cog-outline"
        active={active === "Configurações"}
        onPress={() => {
          setActive("Configurações");
          navigation.navigate("Configurações");
        }}
      />
    </PaperDrawer.Section>
  );
};

const ProtectedRoute = () => {
  const user = useSelector(state => state.userLogged.user);

  console.log(user);
  const isLoggedIn = !!user;

  if (!isLoggedIn) {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 16,
          },
          headerBackImage: () => <CaretLeft size={26} />,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registrar-se"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Drawer.Navigator
      initialRouteName="Página Inicial"
      screenOptions={{
        drawerStyle: {
          width: 81,
        },
        header: props => <HeaderBar {...props} />,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Página Inicial" component={Home} />
      <Drawer.Screen name="Agenda" component={Schedule} />
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Material Didático" component={Material} />
      <Drawer.Screen name="Aulas a Repor" component={Replacement} />
      <Drawer.Screen name="Faturas" component={Invoices} />
      {/* <Drawer.Screen name="Calendário Escolar" component={CalendarPage} /> */}
      {/* <Drawer.Screen name="Metrônomo" component={Metronome} /> */}
      <Drawer.Screen name="Configurações" component={Configs} />
      <Stack.Screen
        name="Notificações"
        component={Notifications}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default function Routes() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <ProtectedRoute />
      </NavigationContainer>
    </PaperProvider>
  );
}
