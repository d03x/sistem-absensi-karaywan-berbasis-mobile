import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { loginStyles } from "@screen/auth/styles.login";
import { Link, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@react-native-material/core";
import { Ionicons } from "@expo/vector-icons";
const LoginScreen = () => {
  const navigate =  useNavigation();
  return (
    <SafeAreaView>
      <LinearGradient
        style={{
          height: Dimensions.get("screen").height,
        }}
        colors={["blue", "transparent"]}
      >
        <View
          style={{
            height: 100,
            alignItems: "flex-start",
            padding: 10,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Login
          </Text>
        </View>
        <View style={loginStyles.loginWrapper}>
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
          onPress={()=>{
           navigate.navigate("home-tab");
          }}
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
            <Text style={{ color: "white", fontWeight: "500",fontSize:13 }}>
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
    </SafeAreaView>
  );
};

export default LoginScreen;
