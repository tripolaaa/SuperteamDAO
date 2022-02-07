import "../styles/globals.css";
import type { AppProps } from "next/app";
import AuthContextProvider from "../src/contexts/AuthContext";
import Navbar from "../src/components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
