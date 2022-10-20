import "../styles/index.css";
import type { AppProps } from "next/app";
import { LanguageContextProvider } from "../contexts/LanguageContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageContextProvider>
      <Component {...pageProps} />
    </LanguageContextProvider>
  );
}

export default MyApp;
