import axios from "axios";
import { Alert } from "react-native";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import * as SecureStorage from "@pagopa/io-react-native-secure-storage";
import apiRequest from "@/services/network/request";
type State = {
  userData: any;
  loading: boolean;
  isAuthenticated: boolean;
  token: string | undefined;
};
type Actions = {
  setUserData: (data: any) => void;
  login: (email: string, password: string) => void;
  setLoading: (loading: boolean) => void;
};

const useAuthStore = create<State & Actions>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userData: {},
      setUserData(data: any) {
        return set({
          userData: data,
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
            const responseData = response.data?.data;
            if (responseData?.token) {
              set({
                userData: responseData?.user,
              });
              await SecureStorage.put("jwtToken", responseData?.token);
            } else {
              Alert.alert("Ada kesalahan", "Ada kesalahan saat login");
            }
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
    }),
    { name: "AuthStore" }
  )
);

export default useAuthStore;
