import { View } from "react-native";
import ItemList from "../components/ItemList";
import { aulasFuturasPorMesAno } from "../utils/getClassesDate";
import React from "react";

const RepositionClasses = {};

const getRepositionClasses = () => {
  aulasFuturasPorMesAno &&
    Object.entries(aulasFuturasPorMesAno).map(item => {
      const [mesAno, aulas] = item;
      const aulasReposicao = aulas?.filter(aula => aula.tipo === "reposição");
      if (aulasReposicao.length > 0) {
        RepositionClasses[mesAno] = aulasReposicao;
      }
    });
};

getRepositionClasses();

export default function Replacement() {
  return (
    <View className="my-2 mx-3">
      <ItemList data={Object.entries(RepositionClasses)} />
    </View>
  );
}
