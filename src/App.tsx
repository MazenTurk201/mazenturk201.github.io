import './App.css'
import Logo from '../src/assets/images/MT.png';
import TurkImo from '../src/assets/images/turkImo.png';
import CoverIMG from '../src/assets/images/wpbe.png';
// import Formal from '../src/assets/images/formal.jpg';
import DotField from '../components/DotField';
import BlurText from "../components/BlurText";
import BorderGlow from '../components/BorderGlow';
import RotatingText from "../components/RotatingText";
import ScrollReveal from '../components/ScrollReveal';
import TextPressure from '../components/TextPressure';
import { Menu } from './components/animate-ui/icons/menu';


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
      colors={['#c084fc', '#f472b6', '#38bdf8']}
    >
      <div style={{ padding: '2em' }}>
        <div className="image-card">
          <img src={cover} alt={title} />

          <a
            href={linkProj}
            target="_blank"
            rel="noopener noreferrer"
            className="open-btn"
          >
            Open Link
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
        <button className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-colors hover:bg-gray-300 dark:hover:bg-gray-600">
          <Menu animateOnHover />
        </button>
      </div>
    </nav>
  );
}

function aboutSection() {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Mazen Sameh Sayed <sub className="text-sm text-zinc-500 dark:text-zinc-400">Turk</sub>
      </h1>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Looking for a starting point or more instructions? Head over to{" "}
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="font-medium text-zinc-950 dark:text-zinc-50"
        >
          Templates
        </a>{" "}
        or the{" "}
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="font-medium text-zinc-950 dark:text-zinc-50"
        >
          Learning
        </a>{" "}
        center.
      </p>
    </div>
  );
};

function DotsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <DotField />
    </div>
  );
}

function App() {

  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <NavBar />
        <DotsBackground />
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div className="flex items-center gap-6 text-center sm:items-start sm:text-left w-full">
            <img
              className=""
              src={TurkImo}
              alt="Me Logo"
              width={200}
              height={200}
            />
            <div className="max-w-2xl flex flex-col items-start gap-4 sm:items-start">
              {TextPressureProps()}
              <p className="flex gap-2 text-2xl text-zinc-600 dark:text-zinc-400">
                I'm a {<RotatingText
                  texts={['Programmer', 'Developer', 'Designer', 'Freelancer', 'Content Creator']}
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
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Mazen Sameh Sayed <sub className="text-sm text-zinc-500 dark:text-zinc-400">Turk</sub>
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Looking for a starting point or more instructions? Head over to{" "}
              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Templates
              </a>{" "}
              or the{" "}
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Learning
              </a>{" "}
              center.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy Now
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
            {scrolltotext("I am an IT engineer and Software Developer with\nexperience in developing user interfaces,\nwebsites, databases, and APIs. I have strong\nknowledge of networks, servers, cameras, and\nconnectivity systems, with a passion for learning\nnew technologies and building impactful projects.\nI also develop applications using Flutter and Dart,\ngiving me the ability to efficiently create crossplatform solutions. I am looking to join a team\nwhere I can contribute, grow, and build highquality products.")}
          </div>
          <section id='AboutUS'>
            {aboutSection()}
          </section>
          <section id='Projects'>
            {ProjectCard({ cover: CoverIMG, title: "Project Title", description: "A brief description of the project goes here.", linkProj: "https://vercel.com", tags: ["Flutter", "Dart", "Game"] })}
          </section>
        </main>
      </div>
    </>
  )
}

export default App
