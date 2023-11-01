import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, FlatList } from "react-native";
import React from "react";
import lista from "../libs/lista.json";
import moment from "moment";
import { Chat, Dot } from "phosphor-react-native";

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

let aulasPassadasPorMesAno = {};
let aulasFuturasPorMesAno = {};

for (let i = 0; i < aulasPassadas.length; i++) {
  const dataAula = new Date(aulasPassadas[i].data);
  const mesAno = moment(dataAula).format("MMMM YYYY");

  if (!aulasPassadasPorMesAno[mesAno]) {
    aulasPassadasPorMesAno[mesAno] = [];
  }

  aulasPassadasPorMesAno[mesAno].push(aulasPassadas[i]);
  aulasPassadasPorMesAno[mesAno].sort(
    (a, b) => new Date(b.data) - new Date(a.data)
  );
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
          <View className="space-y-2 w-full">
            <Text className="capitalize m-auto text-slate-400 text-sm">{`${mes} de ${ano}`}</Text>
            {item[1].map((aula, i) => (
              <View key={i}>
                <View className="flex flex-row items-center">
                  <View
                    className={`bg-slate-600 w-2 h-2 rounded-full mx-2 ${
                      aula?.status === "realizada"
                        ? "bg-green-600"
                        : aula?.status === "naoRealizada"
                        ? "bg-red-600"
                        : null
                    }`}
                  />
                  <Text className="text-base text-slate-500">
                    {moment(aula?.data).format("DD/MM")} às {aula?.hora}
                  </Text>
                </View>
                <View className="flex flex-col my-1">
                  <View className="flex flex-row space-y-2">
                    <View
                      className={`w-[2px] bg-slate-600 mx-[10px] ${
                        aula?.status === "realizada"
                          ? "bg-green-600"
                          : aula?.status === "naoRealizada"
                          ? "bg-red-600"
                          : "h-20"
                      }`}
                    />
                    <View className="flex flex-col space-y-2">
                      <Text className="text-[15px]">
                        {aula?.professor} - {aula?.nome}
                      </Text>
                      <Text
                        className={`capitalize text-slate-600 ${
                          aula?.tipo == "reposição"
                            ? "text-yellow-700 font-bold"
                            : null
                        }`}
                      >
                        {aula?.tipo}
                      </Text>
                      {aula?.status && (
                        <View className="flex items-start my-4">
                          <Text
                            className={`border-[1.5px] rounded-xl px-2 py-1
                            text-xs font-semibold m-0 ${
                              aula?.status === "realizada"
                                ? "border-green-700 text-green-700"
                                : aula?.status === "naoRealizada"
                                ? "border-red-700 text-red-700"
                                : null
                            }`}
                          >
                            {aula?.status === "realizada"
                              ? "Aula realizada"
                              : aula?.status === "naoRealizada"
                              ? "Aula não realizada"
                              : null}
                          </Text>
                        </View>
                      )}
                      {aula?.obs && (
                        <View
                          className="flex flex-row items-center space-x-1  
                          max-w-[250px] my-4"
                        >
                          <Chat size={20} />
                          <Text className="text-xs text-slate-600 flex-wrap">
                            {aula?.obs}
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
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
    <View className="my-2 ml-2">
      <MonthList data={Object.entries(aulasFuturasPorMesAno)} />
    </View>
  );
};

const PreviousClasses = () => {
  return (
    <View className="my-2 ml-2">
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
