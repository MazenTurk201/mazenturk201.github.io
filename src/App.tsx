import './App.css'
import CoverIMG from '../src/assets/images/wpbe.png';
import scrolltotext from "@/components/scrollRevalWedgit";
import ProjectCard from "@/components/projectCardWedgit";
import skill from "@/components/skillWedgit";
import NavBar from "@/components/navBar";
import Footer from "@/components/footerWedgit";
import DotsBackground from "@/components/dotsBackground";
import aboutSection from "@/components/aboutSection";
import headerContent from "@/components/headerContentWedgit";


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
              Mazen Sameh Sayed <sub className="text-sm text-zinc-500 dark:text-zinc-400">(Turk)</sub>
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
            {ProjectCard({ cover: "/Images/lc.png", title: "Love Choice?", description: "Flutter game truth and dare.", linkProj: "https://mazenturk201.github.io/Love-Choice", linkSorce: "https://github.com/MazenTurk201/Love-Choice", tags: ["Flutter", "Dart", "Game"] })}
            {ProjectCard({ cover: "/Images/tworm.png", title: "MT", description: "Bash script to pentest Android Devices.", linkProj: "https://mazenturk201.github.io/MT", linkSorce: null, tags: ["Linux", "Securte", "Bash"] })}
            {ProjectCard({ cover: "/Images/turkcover.png", title: "Love Choice?", description: "Flutter game truth and dare.", linkProj: "https://mazenturk201.github.io/Love-Choice", linkSorce: null, tags: ["Flutter", "Dart", "Game"] })}
            {ProjectCard({ cover: "/Images/turkturk.png", title: "Love Choice?", description: "Flutter game truth and dare.", linkProj: "https://mazenturk201.github.io/Love-Choice", linkSorce: null, tags: ["Flutter", "Dart", "Game"] })}
            {ProjectCard({ cover: CoverIMG, title: "Love Choice?", description: "Flutter game truth and dare.", linkProj: "https://mazenturk201.github.io/Love-Choice", linkSorce: null, tags: ["Flutter", "Dart", "Game"] })}
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
