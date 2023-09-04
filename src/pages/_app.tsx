import { type AppType } from "next/dist/shared/lib/utils";
import Nav from '../components/nav/Nav'
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react"

const MyApp: AppType = ({ Component, pageProps }) => {  
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='flex flex-col min-h-screen bg-cyan-50 dark:bg-[#05011a] px-4'>
        <Nav/>
        <Component {...pageProps}/>
        <Analytics/>
      </div>
    </ThemeProvider>
  )
};

export default MyApp;
