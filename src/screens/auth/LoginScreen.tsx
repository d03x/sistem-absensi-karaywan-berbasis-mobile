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
import useAuthStore from "@/stores/useAuthStore";
import { fonts } from "@/styles/global.styles";
import * as SecureStorage from "@pagopa/io-react-native-secure-storage";
const LoginScreen = async () => {
  const jwtToken = await SecureStorage.get("jwtToken")
  const navigate = useNavigation();
  const [email, onChangeEmailText] = useState("DADAN");
  const [password, onChangePasswordText] = useState("Ginanjar");
  const { login, loading } = useAuthStore();
  const submit = async () => {
    try {
      const response = await login(email, password);
      //@ts-ignore
      navigate.replace("home-tab");
    } catch (e: any) {
      const error = e as AxiosError;
      Alert.alert("Ada Kesalahan", error.message);
    }
  };
  useState(() => {
    if ( jwtToken ) {
      Alert.alert("ADA JWT");
    }
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
        <View>
          <Text
            style={[
              fonts.baseBold,
              {
                fontSize: 20,
                marginBottom: 4,
              },
            ]}
          >
            Wellcome Back
          </Text>
          <Text
            style={[
              fonts.base,
              {
                fontSize: 13,
              },
            ]}
          >
            Silakan masuk dengan akun Anda untuk memulai!
          </Text>
        </View>
        <TextInput
          onChangeText={onChangeEmailText}
          placeholder="Nama"
          style={{
            fontFamily: "Montserrat_400Regular",
            padding: 10,
            borderRadius: 10,
            color: "gray",
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
            fontFamily: "Montserrat_400Regular",
            borderRadius: 10,
            color: "gray",
            height: 44,
            backgroundColor: "#f2f2f2",
          }}
        />
        <TouchableOpacity
          disabled={loading}
          onPress={submit}
          style={{
            gap: 3,
            borderRadius: 10,
            padding: 12,
            flexDirection: "row",
            backgroundColor: loading ? "#dedede" : "blue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              gap: 2,
            }}
          >
            {loading && <ActivityIndicator size={16} color={"white"} />}

            <Text
              style={[
                fonts.base,
                {
                  color: "white",
                  fontWeight: "500",
                  fontSize: 13,
                },
              ]}
            >
              Login
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={[
              {
                borderWidth: 1,
                gap: 3,
                borderRadius: 10,
                borderColor: "red",
                padding: 10,
                flexDirection: "row",
                backgroundColor: "#b3b3b336",
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <Ionicons color={"red"} size={20} name="logo-google" />
            <Text style={[fonts.base, { color: "red", fontWeight: "600" }]}>
              Login Dengan Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
