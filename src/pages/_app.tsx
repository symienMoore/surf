import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../firebase/firebaseContext";
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
     <AuthProvider>
      <Navbar/>
      <Component {...pageProps} />
     </AuthProvider>
    </>
  );
};

export default MyApp;
