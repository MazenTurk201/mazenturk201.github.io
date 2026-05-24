import './App.css'
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
            {skill({ title: "Python", tags: ["Tk", "Qt", "Flask", "requists", "Sqlite"], icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/960px-Python-logo-notext.svg.png", percent: 70, color: "orange", isIconLeft: true, })}
            {skill({ title: "Flutter", tags: ["LoveChoice?", "Firebase", "Supabase", "ResWA", "Animation"], icon: "https://iconape.com/wp-content/png_logo_vector/flutter-logo.png", percent: 70, color: "skyblue", isIconLeft: true, })}
            {skill({ title: "CCNA", tags: ["OSPF", "Subntting", "DHCP", "Telnet", "FTP", "IPv4"], icon: "https://images.credly.com/images/683783d8-eaac-4c37-a14d-11bd8a36321d/ccna_600.png", percent: 70, color: "teal", isIconLeft: true, ImgStyle: "invert glow"})}
            {skill({ title: "CCNP", tags: ["EIGRP", "Distance Vector", "Link-state", "BGP", "RIP", "Default Route", "IPv6"], icon: "https://www.computecindia.in/pics/ccnp.png", percent: 70, color: "pink", isIconLeft: true, ImgStyle: "invert glow"})}
            {skill({ title: "MCSA", tags: ["WSUS", "DHCP", "DNS", "RDC", "GPO", "AD", "Encryption", "Compression", "Shadow Copy", "Folder Share", "WDS"], icon: "https://images.credly.com/images/835b37d1-09fb-42d5-9559-38abc7b4063d/linkedin_thumb_MCSA_Windows_Server_2012-01.png", percent: 70, color: "aqua", isIconLeft: true, })}
            {skill({ title: "Linux", tags: ["Bash", "THM Top20%", "Scripting", "Inject APK", "MSF", "NMap"], icon: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Linux_mascot_tux.png", percent: 70, color: "darkslategrey", isIconLeft: true})}
            {skill({ title: "Github", tags: ["Git", "Git-Page"], icon: "https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png", percent: 70, color: "darkolivegreen", isIconLeft: true, })}
            {skill({ title: "HTML", tags: ["React", "Semantic", "Forms", "SEO", "Accessibility", "Front-End", "Back-End"], icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-html-3d-icon-png-download-3640299.png", percent: 70, color: "orange", isIconLeft: true, })}
            {skill({ title: "CSS", tags: ["MediaQuery", "Flexbox", "Grid", "Bootstrap", "Tailwind", "Sass", "KeyFrame", "Animation", "Fonts"], icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/960px-CSS3_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail", percent: 90, color: "darkblue", isIconLeft: true, })}
            {skill({ title: "C++", tags: ["Test"], icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/960px-ISO_C%2B%2B_Logo.svg.png", percent: 25, color: "skyblue", isIconLeft: true, })}
            {skill({ title: "Typing", tags: ["Fast", "AR", "EN"], icon: "https://cdn3d.iconscout.com/3d/premium/thumb/hand-typing-3d-icon-png-download-9210232.png", percent: 80, color: "gray", isIconLeft: true, })}
          </section>
          <section id='Projects' className="scroll-mt-17 grid grid-cols-1 md:grid-cols-2 gap-5 w-full justify-items-center">
            {ProjectCard({ cover: "/Images/lc.png", title: "Love Choice?", description: "Flutter game truth and dare.", linkProj: "https://mazenturk201.github.io/Love-Choice", linkSorce: "https://github.com/MazenTurk201/Love-Choice", tags: ["Flutter", "Dart", "Game", "Android", "Firebase", "Google", "Online"] })}
            {ProjectCard({ cover: "/Images/wpbe.png", title: "ResWA", description: "Flutter App to restore Whatsapp Chats.", linkProj: "https://mazenturk201.github.io/ResWA/", linkSorce: "https://github.com/MazenTurk201/ResWA", tags: ["Flutter", "Dart", "APP", "Android", "Text", "Whatsapp", "Offline"] })}
            {ProjectCard({ cover: "/Images/tworm.png", title: "MT", description: "Bash script to pentest Android Devices.", linkProj: "https://mazenturk201.github.io/MT", linkSorce: null, tags: ["Linux", "Security", "Bash"] })}
            {ProjectCard({ cover: "/Images/turkcover.png", title: "Easy Command", description: "Flutter game truth and dare.", linkProj: "https://github.com/MazenTurk201/Easy-Command", linkSorce: null, tags: ["Flet", "Cross-Platform", "Python"] })}
            {ProjectCard({ cover: "https://raw.githubusercontent.com/MazenTurk201/Turk-Translate/refs/heads/main/T%20translate%20logo.png", title: "Turk Translate", description: "Flutter game truth and dare.", linkProj: "https://www.linkedin.com/posts/mazen-sameh-19a0a2302_windows-productivity-tools-ugcPost-7445418414610944000-U903/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1BWIYBlS9Ww9vbk5W_0td3exW7u2EjUuQ", linkSorce: "https://github.com/MazenTurk201/Turk-Translate", tags: ["Flet", "Cross-Platform", "Python"] })}
            {ProjectCard({ cover: "/Images/wpbe.png", title: "Test", description: "Flutter game truth and dare.", linkProj: "", linkSorce: null, tags: ["Flutter", "Dart", "Game"] })}
            {ProjectCard({ cover: "https://geekpython.in/wp-content/uploads/2023/08/FlaskxDB.png", title: "Management System", description: "Project Management DB Front & Back End.", linkProj: "https://github.com/MazenTurk201/ProjectManagementDB", linkSorce: null, tags: ["Flutter", "Dart", "Game"] })}
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
