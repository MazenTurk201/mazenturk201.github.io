import './App.css'
import Logo from '../src/assets/images/MT.png';
import TurkImo from '../src/assets/images/turkImo.png';
import CoverIMG from '../src/assets/images/wpbe.png';
import DotField from '../components/DotField';
import BlurText from "../components/BlurText";
import RotatingText from "../components/RotatingText";
import ProjectCard from "@/components/projectCardWedgit";
import skill from "@/components/skillWedgit";
import AboutMeCode from "@/components/aboutMeCodeWedgit";
import iconsRow from "@/components/iconsRow";
import jobsName from "@/components/globalData";
import TextPressureProps from "@/components/textPressureWedgit";
import scrolltotext from "@/components/scrollRevalWedgit";
import { Menu } from './components/animate-ui/icons/menu';
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/animate-ui/components/radix/accordion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/animate-ui/components/animate/tooltip';


function AnimatedBlurText(Text: string, Direction: "top" | "bottom" = "top", Delay: number = 90, isTitle: boolean = false) {
  return (
    <BlurText
      text={Text}
      delay={Delay}
      animateBy="words"
      direction={Direction}
      className={isTitle ? "text-2xl font-bold text-black dark:text-zinc-50" : "text-xl text-black dark:text-zinc-50"}
    />
  )
};

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // لو نزلنا أكتر من 20 بكسل، فعل الـ blur
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`w-full h-16 flex items-center justify-between px-8 fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/30 dark:bg-black/30 backdrop-blur drop-shadow-2xl' : 'bg-transparent'}`}>
      <div className="flex items-center gap-5">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        <div className='not-sm:hidden'>{AnimatedBlurText("Mazen Sameh", "top", 90, true)}</div>

      </div>
      <div className="flex gap-4">
        <a className='not-sm:hidden' href="#" >{AnimatedBlurText("Home", "bottom", 120)}</a>
        <a className='not-sm:hidden' href="#AboutUS" >{AnimatedBlurText("About", "bottom", 150)}</a>
        <a className='not-sm:hidden' href="#" >{AnimatedBlurText("Contact", "bottom", 170)}</a>
        <button className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-colors hover:bg-gray-300 dark:hover:bg-gray-600 sm:hidden" style={{ zIndex: '3' }}>
          <Menu animateOnTap />
        </button>
      </div>
    </nav>
  );
}

function aboutSection() {
  return (
    <div className='flex items-center justify-space-between gap-5 w-full not-sm:flex-col not-sm:items-center not-sm:justify-center not-sm:gap-0 not-sm:w-full not-sm:p-0 not-sm:m-0'>
      <img src="/Images/me.png" alt="Me" className="w-90 md:w-80 h-auto rounded-2xl float-left me flying-circle not-sm:absolute" />
      <div className="spliter not-sm:hidden"></div>
      {AboutMeCode()}
    </div>
  );
};

function DotsBackground() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden pointer-events-none z-0">
      <DotField />
    </div>
  );
}

function headerContent() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left w-full z-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <img
              src={TurkImo}
              alt="Me Logo"
              className="w-90 md:w-150 h-auto"
            />
          </TooltipTrigger>
          <TooltipContent>
            <div className='whoisme'><p className='text-xl'>Turk</p></div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="flex flex-col items-center md:items-start gap-4 w-full">
        {TextPressureProps()}
        {iconsRow()}
        <p className="flex gap-2 text-2xl text-zinc-600 dark:text-zinc-400 text-left">
          I'm a {<RotatingText
            texts={jobsName}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom="first"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
            splitBy="characters"
            auto
            loop
          />}.
        </p>
      </div>
    </div>
  )
}

function Footer() {
  return <footer>
    <div className='flex flex-col items-center justify-center text-left gap-3'>
      <img src={Logo} alt="Turk Logo" className="w-20 h-20" />
      <p>Thanks for visiting my portfolio! {"<3`"}</p>
      <p>&copy; {new Date().getFullYear()} Mazen Sameh. All rights reserved.</p>
    </div>
    <div className='w-90'>Center</div>
    <div>
      <Accordion type="single" collapsible className='w-full'>
        <AccordionItem value={'1'}>
          <AccordionTrigger>How to contact?</AccordionTrigger>
          <AccordionContent>
            <div>Contact me via <a className='text-green-500' href="https://wa.me/201092130013?text=Hello+Turk">Whatsapp</a></div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'2'}>
          <AccordionTrigger>Accordion Item 2</AccordionTrigger>
          <AccordionContent>
            <div>Accordion Content 2</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={'3'}>
          <AccordionTrigger>Accordion Item 2</AccordionTrigger>
          <AccordionContent>
            <div>Accordion Content 2</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </footer>
}



function App() {

  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <NavBar />
        <DotsBackground />
        <main className="flex flex-1 w-full flex-col items-center justify-between py-22 md:pt-32 px-16 bg-white dark:bg-black not-sm:p-5">
          {headerContent()}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl not-sm:text-xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 text-center">
              Mazen Sameh Sayed <sub className="text-sm text-zinc-500 dark:text-zinc-400">( Turk )</sub>
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-base font-medium">
            <div className="flex not-sm:flex-col justify-center items-center gap-4 w-full">
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
              href="#Projects"
              rel="noopener noreferrer"
            >
              Projects
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
              href="https://drive.google.com/file/d/1EQm8UMcZYuxtKoGnh1HtX8kROkMz5MCz/view?usp=sharing"
              target='_blank'
              rel="noopener noreferrer"
              >
              Open CV
            </a>
              </div>
            <div className="h-50"></div>
            {scrolltotext("I am an IT engineer and Software Developer with\nexperience in developing user interfaces,\nwebsites, databases, and APIs. I have strong\nknowledge of networks, servers, cameras, and\nconnectivity systems, with a passion for learning\nnew technologies and building impactful projects.\nI also develop applications using Flutter and Dart,\ngiving me the ability to efficiently create crossplatform solutions. I am looking to join a team\nwhere I can contribute, grow, and build highquality products.")}
          </div>
          <section id='AboutUS'>
            {aboutSection()}
          </section>
          <section id='Skills' className='scroll-mt-17 grid grid-cols-1 md:grid-cols-2 gap-5 w-full justify-items-center md:py-20'>
            {skill({ title: "Python", tags: ["Tk", "Qt", "Flask", "requists"], icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/960px-Python-logo-notext.svg.png", percent: 70, color: "orange", isIconLeft: true, })}
            {skill({ title: "Flutter", tags: ["Test"], icon: "https://iconape.com/wp-content/png_logo_vector/flutter-logo.png", percent: 70, color: "skyblue", isIconLeft: true, })}
          </section>
          <section id='Projects' className="scroll-mt-17 grid grid-cols-1 md:grid-cols-2 gap-5 w-full justify-items-center">
            {ProjectCard({ cover: "/Images/lc.png", title: "Love Choice?", description: "Flutter game truth and dare.", linkProj: "https://mazenturk201.github.io/Love-Choice", tags: ["Flutter", "Dart", "Game"] })}
            {ProjectCard({ cover: "/Images/tworm.png", title: "MT", description: "Bash script to pentest Android Devices.", linkProj: "https://mazenturk201.github.io/MT", tags: ["Linux", "Securte", "Bash"] })}
            {ProjectCard({ cover: "/Images/turkcover.png", title: "Love Choice?", description: "Flutter game truth and dare.", linkProj: "https://mazenturk201.github.io/Love-Choice", tags: ["Flutter", "Dart", "Game"] })}
            {ProjectCard({ cover: CoverIMG, title: "Love Choice?", description: "Flutter game truth and dare.", linkProj: "https://mazenturk201.github.io/Love-Choice", tags: ["Flutter", "Dart", "Game"] })}
          </section>
          <section id='End' className='min-h-100 m-0 p-0'>
            <h1 className='text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 text-center'>
              ✍️ Random Dev Quote
            </h1>
            <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight" alt="Use AI" className="w-full md:w-auto h-auto object-cover" />
          </section>
        </main>
        {Footer()}
      </div>
    </>
  )
}

export default App
