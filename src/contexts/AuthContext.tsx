import React from "react";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => {},
});

export default function AuthContextProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  console.log("isLoggedIn :>> ", isLoggedIn);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
