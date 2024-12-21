import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import { loginStyles } from "@screen/auth/styles.login";
import { Link } from "@react-navigation/native";
const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View style={loginStyles.loginWrapper}>
        <Link screen={"home-tab"}>Login</Link>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
