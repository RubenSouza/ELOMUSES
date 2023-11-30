import { View, Text, FlatList } from "react-native";
import React from "react";
import NotificationItem from "../components/NotificationItem";

const notifications = [
  {
    title: "Faturas atrasadas",
    date: "2022-01-01",
    content: "Você possui faturas em atraso.",
  },
  {
    title: "Fatura se aproximando do dia de pagamento",
    date: "2022-01-05",
    content: "Sua próxima fatura vence em 5 dias. ",
  },
  {
    title: "Pagamento confirmado",
    date: "2022-01-10",
    content: "Seu pagamento foi confirmado.",
  },
  {
    title: "Próxima aula é amanhã",
    date: "2022-01-15",
    content: "Sua próxima aula de música é amanhã. ",
  },
  {
    title: "Próxima aula é hoje",
    date: "2022-01-20",
    content: "Sua próxima aula de música é hoje.",
  },
  {
    title: "Próxima aula é hoje",
    date: "2022-01-20",
    content: "Sua próxima aula de música é hoje.",
  },
  {
    title: "Próxima aula é hoje",
    date: "2022-01-20",
    content: "Sua próxima aula de música é hoje.",
  },
  {
    title: "Próxima aula é hoje",
    date: "2022-01-20",
    content: "Sua próxima aula de música é hoje.",
  },
];

export default function Notifications() {
  return (
    <View className="mx-5 flex items-center">
      <FlatList
        data={notifications}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <NotificationItem
            title={item.title}
            date={item.date}
            content={item.content}
          />
        )}
      />
    </View>
  );
}
