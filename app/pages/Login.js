import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { useToast } from "react-native-toast-notifications";
import axios from "axios";
const URL = process.env.EXPO_PUBLIC_API_URL;

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(true);
  const toast = useToast();

  const handleSubmit = async e => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const fetchUserLogin = await axios.post(`${URL}/users/login`, userData);
      if (fetchUserLogin) {
        dispatch(setUser(fetchUserLogin.data));
      }
    } catch (error) {
      toast.show(error?.response?.data?.message, {
        type: "warning",
        placement: "top",
        duration: 4000,
        animationType: "slide-in",
      });
    }
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
        <Text className="font-semibold  text-sm">Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Registrar-se")}>
          <Text className="font-bold text-violet-900">Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
