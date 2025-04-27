import React, { useState } from "react";
import { 
  View, Text, TextInput, Button, StyleSheet, 
  TouchableOpacity, ImageBackground 
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", email, password);
  };

  return (
    <ImageBackground 
      source={require("../../assets/background.jpg")}  // Make sure you have this image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          value={email} 
          onChangeText={setEmail} 
          keyboardType="email-address" 
          autoCapitalize="none" 
        />

        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry 
        />

        <Button title="Login" onPress={handleLogin} />

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.link}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "white",
  },
  input: {
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  link: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
});

export default LoginScreen;
