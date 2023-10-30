import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, FlatList } from "react-native";
import React from "react";
import lista from "../libs/lista.json";
import moment from "moment";

const data = new Date("2023-10-30");

moment.updateLocale("pt-br", {
  months:
    "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
      "_"
    ),
  monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
});

moment.locale("pt-br");

let aulas = lista;

let dataAtual = new Date();

let aulasPassadas = [];
let aulasFuturas = [];

aulasFuturas.sort((a, b) => new Date(a.data) - new Date(b.data));
aulasPassadas.sort((a, b) => new Date(a.data) - new Date(b.data));

for (let i = 0; i < aulas.length; i++) {
  let dataAula = new Date(aulas[i].data);

  if (dataAula <= dataAtual) {
    aulasPassadas.push(aulas[i]);
  } else {
    aulasFuturas.push(aulas[i]);
  }
}

const aulasPassadasPorMesAno = {};
const aulasFuturasPorMesAno = {};

for (let i = 0; i < aulasPassadas.length; i++) {
  const dataAula = new Date(aulasPassadas[i].data);
  const mesAno = moment(dataAula).format("MMMM YYYY");

  if (!aulasPassadasPorMesAno[mesAno]) {
    aulasPassadasPorMesAno[mesAno] = [];
  }

  aulasPassadasPorMesAno[mesAno].push(aulasPassadas[i]);
}

for (let i = 0; i < aulasFuturas.length; i++) {
  const dataAula = new Date(aulasFuturas[i].data);
  const mesAno = moment(dataAula).format("MMMM YYYY");

  if (!aulasFuturasPorMesAno[mesAno]) {
    aulasFuturasPorMesAno[mesAno] = [];
  }

  aulasFuturasPorMesAno[mesAno].push(aulasFuturas[i]);
}

const MonthList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        const [mes, ano] = item[0].split(" ");
        return (
          <View>
            <Text className="capitalize m-auto text-slate-400 text-sm">{`${mes} de ${ano}`}</Text>
            {item[1].map((aula, i) => (
              <View key={i}>
                <Text>{aula?.data}</Text>
                <Text>{aula?.nome}</Text>
              </View>
            ))}
          </View>
        );
      }}
    />
  );
};

const NextClasses = () => {
  return (
    <View className="my-2">
      <MonthList data={Object.entries(aulasFuturasPorMesAno)} />
    </View>
  );
};

const PreviousClasses = () => {
  return (
    <View className="my-2">
      <MonthList data={Object.entries(aulasPassadasPorMesAno)} />
    </View>
  );
};

export default function Schedule() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Próximas Aulas"
      screenOptions={{
        tabBarActiveTintColor: "#da842f",
        tabBarInactiveTintColor: "#808080",
        tabBarLabelStyle: { fontWeight: "bold" },
        tabBarIndicatorStyle: {
          backgroundColor: "#da842f",
        },
      }}
    >
      <Tab.Screen name="Próximas Aulas" component={NextClasses} />
      <Tab.Screen name="Aulas Anteriores" component={PreviousClasses} />
    </Tab.Navigator>
  );
}
