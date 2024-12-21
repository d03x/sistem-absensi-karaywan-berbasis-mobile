import { create } from "zustand";

type State = {
    loading: boolean;
    isAuthenticated: boolean;
    token: string | undefined
};
type Actions = {
    setLoading: (loading: boolean) => void;
};

const useAuthStore = create<State & Actions>((set) => ({
    isAuthenticated: false,
    token: undefined,
    loading: false,
    login(){

    },
    setLoading(loading) {
        return set({
            loading: loading,
        });
    },
}));

export default useAuthStore;