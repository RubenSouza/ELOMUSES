import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleSubmit = () => {
    dispatch(setUser(true));
  };

  return (
    <View className="m-6 flex flex-1 items-center justify-center space-y-4">
      <View className="">
        <Image
          source={require("../assets/logo.png")}
          className="max-w-[200px] max-h-[120px]"
        />
      </View>
      <View className="w-full space-y-3 px-2">
        <TextInput
          label="Nome"
          mode="outlined"
          placeholder="Nome"
          className="bg-white h-14"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="Email"
          mode="outlined"
          placeholder="Email"
          className="bg-white h-14"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="Senha"
          mode="outlined"
          secureTextEntry={showPassword}
          right={
            <TextInput.Icon
              icon="eye"
              onPress={() => setShowPassword(!showPassword)}
              style={{ marginTop: 14 }}
            />
          }
          className="bg-white h-14"
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          label="Confirmar Senha"
          mode="outlined"
          secureTextEntry={showConfirmPassword}
          right={
            <TextInput.Icon
              icon="eye"
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{ marginTop: 14 }}
            />
          }
          className="bg-white h-14"
          onChangeText={text => setConfirmPassword(text)}
        />
      </View>
      <View className="w-full px-2">
        <Button
          mode="contained"
          className="w-full py-1 rounded-md"
          onPress={handleSubmit}
        >
          LOGIN
        </Button>
      </View>
      <View className="flex flex-row space-x-1 items-center">
        <Text className="font-semibold  text-sm">Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="font-bold text-violet-900">
            Clique para entrar !
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
