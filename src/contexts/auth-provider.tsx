import apiRequest from "@/services/network/request";
import { AxiosError } from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Alert } from "react-native";
import * as Storage from "@pagopa/io-react-native-secure-storage";
import { Text } from "react-native";
type AuthContextProps = {
  userInfo: any;
  token: any;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  loading: boolean;
  setToken: (token: string) => void;
};
const AuthProviderContext = React.createContext<AuthContextProps>({
  userInfo: null,
  login: (email, password) => Promise.reject(false),
  token: null,
  isAuthenticated: false,
  loading: false,
  setToken: (token: string) => {},
});

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();
  const [token, setUserToken] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function setToken() {
    setUserToken(token);
  }
  async function login(email, password): Promise<boolean> {
    try {
      setLoading(true);
      const response = await apiRequest.post("/api/auth/login", {
        email,
        password,
      });
      const data = response.data?.data;
      await Storage.put("token", data?.token);
      setUserInfo(data?.user);
      return true;
    } catch (e: any) {
      const error = e as AxiosError;
      Alert.alert(error.message);
    } finally {
      setLoading(false);
    }
    return false;
  }
  async function checkIsAuthenticated() {
    Storage.get("token").then((token: string) => {
      setUserToken(token);
      setIsAuthenticated(token ? true : false);
    });
    try {
      const response = await apiRequest.get("api/user/info", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });
    } catch (error) {
      Alert.alert(token);
    }
  }
  useEffect(() => {
    checkIsAuthenticated();
  }, []);
  return (
    <AuthProviderContext.Provider
      value={{
        isAuthenticated,
        login,
        loading,
        userInfo,
        setToken,
        token,
      }}
    >
      <Text>{isAuthenticated ? "AKIF" : "NO"}</Text>
      {children}
    </AuthProviderContext.Provider>
  );
};

const useAuthProvider = () => {
  return React.useContext(AuthProviderContext);
};

export { AuthProviderContext, useAuthProvider, AuthProvider };
