import {
  ActivityIndicator,
  Alert,
  Dimensions,
  SafeAreaView,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import { loginStyles } from "@screen/auth/styles.login";
import { Link, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@react-native-material/core";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import axios, { AxiosError } from "axios";
const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigation();
  const [email, onChangeEmailText] = useState("DADAN");
  const [password, onChangePasswordText] = useState("Ginanjar");
  const submit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://192.168.43.50:3000/api/auth/login",
        { email, password }
      );
      if (response.status === 200) {
        Alert.alert(response.status.toString(), response.data?.message);
      }
    } catch (e: any) {
      const error = e as AxiosError;
      Alert.alert("Oke", error.code);
    } finally {
      setLoading(false);
    }
  };
  useState(() => {
    const subscribe = navigate.addListener("focus", () => {});
    return subscribe;
  });
  return (
    <LinearGradient
      style={{
        height: Dimensions.get("screen").height,
      }}
      colors={["blue", "transparent"]}
    >
      <View style={loginStyles.loginWrapper}>
        {loading && <ActivityIndicator />}
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 4,
            }}
          >
            Wellcome Back
          </Text>
          <Text
            style={{
              fontSize: 13,
            }}
          >
            Silakan masuk dengan akun Anda untuk memulai!
          </Text>
        </View>
        <TextInput
          onChangeText={onChangeEmailText}
          placeholder="Nama"
          style={{
            padding: 10,
            borderRadius: 10,
            color: "gray",
            fontWeight: "bold",
            height: 44,
            backgroundColor: "#f2f2f2",
          }}
        />
        <TextInput
          secureTextEntry
          placeholder="Kata Sandi"
          onChangeText={onChangePasswordText}
          style={{
            padding: 10,
            borderRadius: 10,
            color: "gray",
            fontWeight: "bold",
            height: 44,
            backgroundColor: "#f2f2f2",
          }}
        />
        <TouchableOpacity
          onPress={submit}
          style={{
            gap: 3,
            borderRadius: 10,
            padding: 12,
            flexDirection: "row",
            backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "500", fontSize: 13 }}>
            Login Dengan Google
          </Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              gap: 3,
              borderRadius: 10,
              borderColor: "red",
              padding: 10,
              flexDirection: "row",
              backgroundColor: "#b3b3b336",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons color={"red"} size={20} name="logo-google" />
            <Text style={{ color: "red", fontWeight: "600" }}>
              Login Dengan Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
