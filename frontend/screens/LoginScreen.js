import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { signInWithMicrosoft } from "../auth/authConfig";

export default function LoginScreen({ navigation }) {
  const [userInfo, setUserInfo] = useState(null);

  const handleLogin = async () => {
    const result = await signInWithMicrosoft();
    if (result) {
      setUserInfo(result);
      navigation.navigate("Home", { user: result });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pantalla de Login</Text>
      <Button title="Iniciar sesión con Microsoft" onPress={handleLogin} />
      {userInfo && <Text>Bienvenido, {userInfo.name}</Text>}
    </View>
  );
}
