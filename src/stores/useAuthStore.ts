import axios from "axios";
import { Alert } from "react-native";
import { create } from "zustand";
import * as SecureStorage from "@pagopa/io-react-native-secure-storage";
import apiRequest from "@/services/network/request";
type State = {
  userData: any;
  loading: boolean;
  isAuthenticated: boolean;
  token: string | undefined;
};
type Actions = {
  setUserData: () => void;
  login: (email: string, password: string) => void;
  setLoading: (loading: boolean) => void;
};

const useAuthStore = create<State & Actions>((set) => ({
  isAuthenticated: false,
  userData: {},
  setUserData() {
    return set({
      userData: {
        id: 10,
      },
    });
  },
  token: undefined,
  loading: false,
  login: async (email, password) => {
    try {
      set({
        loading: true,
      });
      const response = await apiRequest.post("/api/auth/login", {
        email,
        password,
      });
      if (response.status === 200) {
        const tokenJwt = response.data;
        Alert.alert(tokenJwt?.message?.toString());
        await SecureStorage.put("data", JSON.stringify(tokenJwt));
        console.log(await SecureStorage.get("data"));
      }
      return true;
    } catch (error) {
      throw error;
    } finally {
      set({
        loading: false,
      });
    }
  },
  setLoading(loading) {
    return set({
      loading: loading,
    });
  },
}));

export default useAuthStore;
