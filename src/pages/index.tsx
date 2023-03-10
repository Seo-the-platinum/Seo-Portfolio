import { type NextPage } from "next";
import Head from "next/head";
import About from '../components/about/About'
import Carousel from "../components/carousel/Carousel";
import { projects } from '../utils/projects'
import Project from '../components/projects/Project'
import Contact from '../components/contact/Contact'

const Home: NextPage = () => {
  const slides = projects.map(project=> <Project key={project.title} project={project}/>)
  return (
    <>
      <Head>
        <title>Seo Flores</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col md:items-center font-serif bg-cyan-50 dark:bg-[#05011a] max-w-7xl self-center" id='home'>
        <div className="flex flex-col md:my-10">
          <div className='flex-col flex'>
            <h1 className='text-sky-800 z-10 dark:text-slate-300 text-4xl mt-8'>Hello There</h1>
            <About/>
          </div>
          <div className='flex flex-col md:my-10'>
            <h1 className='mt-8 text-sky-800 dark:text-slate-300 text-4xl'>My Projects</h1>
            <Carousel>
              {slides}
            </Carousel>
          </div>
          <div className='flex flex-col'>
            <h1 className='mt-8 text-sky-800 dark:text-slate-300 text-4xl'>How To Reach Me</h1>
            <Contact/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
