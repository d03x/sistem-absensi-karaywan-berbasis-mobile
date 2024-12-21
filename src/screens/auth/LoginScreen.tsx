import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import { loginStyles } from "@screen/auth/styles.login";
import { Link } from "@react-navigation/native";
import { Button } from "@react-native-material/core";
const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View style={loginStyles.loginWrapper}>
        <Button title={"login"} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
