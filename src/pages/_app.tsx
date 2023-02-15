import { type AppType } from "next/dist/shared/lib/utils";
import Nav from '../components/nav/Nav'
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Nav/>
      <Component {...pageProps}/>
    </ThemeProvider>
  )
};

export default MyApp;
