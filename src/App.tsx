import './App.css'
import Logo from '../src/assets/images/MT.png';
import TurkImo from '../src/assets/images/turkImo.png';
import CoverIMG from '../src/assets/images/wpbe.png';
import Formal from '../src/assets/images/formal.jpg';
import DotField from '../components/DotField';
import BlurText from "../components/BlurText";
import BorderGlow from '../components/BorderGlow';
import RotatingText from "../components/RotatingText";
import ScrollReveal from '../components/ScrollReveal';
import TextPressure from '../components/TextPressure';
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

const jobsName = [
  'IT Engineer',
  'Software Eng',
  'Instructor',
  'Programmer',
  'Developer',
  'Data Entry',
  'Freelancer',
  'Sys Admin',
  'Network Eng',
  'Mobile Dev',
  'Web Dev',
  'Front-End Dev',
  'Back-End Dev',
  'Full-Stack Dev',
  'Tech Support',
  'Help Desk',
  'Scripting Expert',
  'Tech Enthusiast',
  'Video Editor'
];

function TextPressureProps() {
  return (
    <div style={{ position: 'relative', }}>
      <TextPressure
        text="Hello!"
        flex
        alpha={false}
        stroke={false}
        width
        weight
        italic
        textColor="#ffffff"
        strokeColor="#5227FF"
        minFontSize={36}
      />
    </div>
  )
};

function ProjectCard({ cover, title, description, linkProj, tags }: { cover: string, title: string, description: string, linkProj: string, tags: string[] }) {
  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="40 80 80"
      backgroundColor="#120F17"
      borderRadius={28}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated={false}
      colors={['#c084fc', '#f472b6', '#c538f8']}
      className='zoom'
    >
      <div style={{ padding: '2em' }}>
        <div className="image-card">
          <img src={cover} alt={title} style={{ aspectRatio: "16/9", objectFit: "cover" }} />

          <a
            href={linkProj}
            target="_blank"
            rel="noopener noreferrer"
            className="open-btn"
          >
            Open Project
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 flex-wrap mt-4">
          {tags.map((tag, index) => (
            <div key={index} className='tag'>
              {tag}
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-black dark:text-zinc-50 text-left">{title}</h2>
        <p className="text-lg text-black dark:text-zinc-50 text-left">{description}</p>
      </div>
    </BorderGlow>
  )
};


function scrolltotext(Text: string) {
  return <ScrollReveal
    baseOpacity={0.1}
    enableBlur
    baseRotation={3}
    blurStrength={4}
  >
    {Text}
  </ScrollReveal>
};

function AnimatedBlurText(Text: string, Direction: "top" | "bottom" = "top", Delay: number = 90, isTitle: boolean = false) {
  return (
    <BlurText
      text={Text}
      delay={Delay}
      animateBy="words"
      direction={Direction}
      className={isTitle ? "text-2xl font-bold text-black dark:text-zinc-50" : "text-xl text-black dark:text-zinc-50 hover:underline"}
    />
  )
};

function NavBar() {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-8 bg-white dark:bg-black bg-opacity-50 backdrop-blur-sm fixed top-0 left-0 z-10">
      <div className="flex items-center gap-5">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        <div>{AnimatedBlurText("Mazen Sameh", "top", 90, true)}</div>

      </div>
      <div className="flex gap-4">
        <a href="#" >{AnimatedBlurText("Home", "bottom", 120)}</a>
        <a href="#AboutUS" >{AnimatedBlurText("About", "bottom", 150)}</a>
        <a href="#" >{AnimatedBlurText("Contact", "bottom", 170)}</a>
        <button className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-colors hover:bg-gray-300 dark:hover:bg-gray-600" style={{ zIndex: '3' }}>
          <Menu animateOnTap />
        </button>
      </div>
    </nav>
  );
}

function aboutSection() {
  return (
    <div className='flex items-center justify-space-between gap-5 w-full'>
      <img src={Formal} alt="Me"/>
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        about me section
      </div>
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
    <div className="flex items-center gap-6 text-center sm:items-start sm:text-left w-full">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <img
              src={TurkImo}
              alt="Me Logo"
              width={200}
              height={200}
            />
          </TooltipTrigger>
          <TooltipContent>
            <div className='whoisme'><p className='text-xl'>Turk</p></div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="max-w-2xl flex flex-col items-start gap-4 sm:items-start">
        {TextPressureProps()}
        <p className="flex gap-2 text-2xl text-zinc-600 dark:text-zinc-400">
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

interface ProgressDemoProps {
  initialValue: number;
  color?: string;
}

export const RadixProgressDemo: React.FC<ProgressDemoProps> = ({ initialValue, color = 'purple' }) => {
  // بنبدأ من 0 عشان الأنيميشن يظهر وهو بيتحرك من الصفر للقيمة المطلوبة
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // بنستنى لقطة صغيرة (تيك فريم) عشان الـ DOM يلحق يستوعب الصفر قبل ما نغير القيمة
    const timer = setTimeout(() => {
      // بنضمن إن القيمة متعديش 100 وماتقلش عن 0 لحماية الـ UI
      const safeValue = Math.min(Math.max(initialValue, 0), 100);
      setProgress(safeValue);
    }, 100);

    return () => clearTimeout(timer);
  }, [initialValue]); // لو الـ initialValue اتغيرت من بره، الـ بار هيتحرك للمكان الجديد بالأنيميشن

  return (
    <div className="w-[300px] bg-gray-200 h-2 rounded-full overflow-hidden">
      <div
        className="h-full transition-all duration-1000 ease-out"
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
    </div>
  );
};


function skill({ title, tags, icon, percent, color, isIconLeft }: { title: string, tags: string[], icon: string, percent: number, color: string, isIconLeft: boolean }) {
  let iconBode = <div>
    <img src={icon} alt={title as string} width={50} />
  </div>
  let contentBody = <div className='flex flex-col justify-center items-center gap-3'>
    {title}
    <div className='flex gap-2'>
      {tags.map((tag, index) => (
        <span key={index} className="tag small">
          {tag}
        </span>
      ))
      }
    </div>
    {<RadixProgressDemo initialValue={percent} color={color} />}
  </div>
  return <div className='flex gap-5 h-30 items-center justify-center'>
    {isIconLeft ? iconBode : contentBody}
    <div className='spliter'></div>
    {isIconLeft ? contentBody : iconBode}
  </div>
}

function App() {

  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <NavBar />
        <DotsBackground />
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          {headerContent()}
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Mazen Sameh Sayed <sub className="text-sm text-zinc-500 dark:text-zinc-400">( Turk )</sub>
            </h1>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row sm:items-center sm:justify-center sm:gap-6">
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
              href="#Projects"
              rel="noopener noreferrer"
            >
              Projects
            </a>
            <div className="h-50"></div>
            {scrolltotext("I am an IT engineer and Software Developer with\nexperience in developing user interfaces,\nwebsites, databases, and APIs. I have strong\nknowledge of networks, servers, cameras, and\nconnectivity systems, with a passion for learning\nnew technologies and building impactful projects.\nI also develop applications using Flutter and Dart,\ngiving me the ability to efficiently create crossplatform solutions. I am looking to join a team\nwhere I can contribute, grow, and build highquality products.")}
          </div>
          <section id='AboutUS'>
            {aboutSection()}
          </section>
          <section id='Skills'>
            {skill({ title: "Python", tags: ["Tk", "Qt", "Flask", "requists"], icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/960px-Python-logo-notext.svg.png", percent: 70, color: "orange", isIconLeft: true, })}
            {skill({ title: "Flutter", tags: ["Test"], icon: "https://iconape.com/wp-content/png_logo_vector/flutter-logo.png", percent: 70, color: "skyblue", isIconLeft: true, })}
          </section>
          <section id='Projects' className="flex flex-col items-center justify-center gap-5">
            {ProjectCard({ cover: "/Images/lc.png", title: "Love Choice?", description: "Flutter game truth and dare.", linkProj: "https://mazenturk201.github.io/Love-Choice", tags: ["Flutter", "Dart", "Game"] })}
            {ProjectCard({ cover: "/Images/tworm.png", title: "MT", description: "Bash script to pentest Android Devices.", linkProj: "https://mazenturk201.github.io/MT", tags: ["Linux", "Securte", "Bash"] })}
            {ProjectCard({ cover: "/Images/turkcover.png", title: "Love Choice?", description: "Flutter game truth and dare.", linkProj: "https://mazenturk201.github.io/Love-Choice", tags: ["Flutter", "Dart", "Game"] })}
            {ProjectCard({ cover: CoverIMG, title: "Love Choice?", description: "Flutter game truth and dare.", linkProj: "https://mazenturk201.github.io/Love-Choice", tags: ["Flutter", "Dart", "Game"] })}
          </section>
        </main>
        {Footer()}
      </div>
    </>
  )
}

export default App
