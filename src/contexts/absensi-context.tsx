import React, { createContext } from "react";

type AbsensiContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const AbsensiContext = createContext<AbsensiContextType>({
  loading: false,
  setLoading: () => {},
});

export type AbsensiProviderProps = {
  children: React.ReactNode;
};

const AbsensiProvider = ({ children }: AbsensiProviderProps) => {
  return (
    <AbsensiContext.Provider value={{ loading: false, setLoading: () => {} }}>
      {children}
    </AbsensiContext.Provider>
  );
};

export { AbsensiContext, AbsensiProvider };
