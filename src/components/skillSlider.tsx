"use client";
import Skill from "@/components/skillWedgit";



const skills = [
  {
    title: "Python",
    tags: [
      "Flask",
      "Flet",
      "SQLite",
      "Requests",
      "Automation",
      "API",
      "Tkinter",
      "PyQt",
      "Web Scraping",
    ],
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/960px-Python-logo-notext.svg.png",
    percent: 85,
    color: "orange",
  },

  {
    title: "Flutter",
    tags: [
      "Firebase",
      "Supabase",
      "Responsive UI",
      "Animations",
      "REST API",
      "State Management",
      "Android",
      "Cross Platform",
    ],
    icon: "https://iconape.com/wp-content/png_logo_vector/flutter-logo.png",
    percent: 75,
    color: "skyblue",
  },

  {
    title: "CCNA",
    tags: [
      "OSPF",
      "Subnetting",
      "DHCP",
      "VLAN",
      "IPv4",
      "Routing",
      "Switching",
      "Cisco CLI",
    ],
    icon: "https://images.credly.com/images/683783d8-eaac-4c37-a14d-11bd8a36321d/ccna_600.png",
    percent: 95,
    color: "teal",
    ImgStyle: "invert glow",
  },

  {
    title: "CCNP",
    tags: [
      "BGP",
      "EIGRP",
      "RIP",
      "IPv6",
      "Static Routes",
      "Link-State",
      "Advanced Routing",
      "Troubleshooting",
    ],
    icon: "https://www.computecindia.in/pics/ccnp.png",
    percent: 80,
    color: "pink",
    ImgStyle: "invert glow",
  },

  {
    title: "MCSA",
    tags: [
      "Active Directory",
      "DNS",
      "DHCP",
      "GPO",
      "WSUS",
      "WDS",
      "Remote Desktop",
      "File Sharing",
      "Windows Server",
    ],
    icon: "https://images.credly.com/images/835b37d1-09fb-42d5-9559-38abc7b4063d/linkedin_thumb_MCSA_Windows_Server_2012-01.png",
    percent: 70,
    color: "aqua",
  },

  {
    title: "Linux",
    tags: [
      "Bash",
      "Shell Scripting",
      "Nmap",
      "Metasploit",
      "System Admin",
      "Terminal",
      "THM Top 20%",
      "APK Tools",
    ],
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Linux_mascot_tux.png",
    percent: 78,
    color: "darkslategrey",
    isIconLeft: true,
  },

  {
    title: "GitHub",
    tags: [
      "Git",
      "Version Control",
      "GitHub Pages",
      "Repositories",
      "Open Source",
      "Collaboration",
    ],
    icon: "https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png",
    percent: 95,
    color: "darkolivegreen",
  },

  {
    title: "HTML",
    tags: [
      "Semantic HTML",
      "Forms",
      "SEO",
      "Accessibility",
      "Responsive Design",
      "Components",
    ],
    icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-html-3d-icon-png-download-3640299.png",
    percent: 88,
    color: "orange",
  },

  {
    title: "CSS",
    tags: [
      "Flexbox",
      "Grid",
      "Tailwind",
      "Bootstrap",
      "Sass",
      "Animations",
      "Media Queries",
      "Keyframes",
      "Glassmorphism",
      "Clone Pages",
    ],
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/960px-CSS3_logo.svg.png",
    percent: 90,
    color: "darkblue",
  },

  {
    title: "React",
    tags: [
      "Hooks",
      "Components",
      "Vite",
      "Props",
      "State",
      "JSX",
      "Virtual DOM",
      "NPM",
    ],
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png",
    percent: 75,
    color: "skyblue",
  },

  {
    title: "C++",
    tags: [
      "OOP",
      "Arduino IDE",
      "Algorithms",
      "Problem Solving",
      "Pointers",
      "Data Structures",
    ],
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/960px-ISO_C%2B%2B_Logo.svg.png",
    percent: 50,
    color: "skyblue",
  },

  {
    title: "Data Entry",
    tags: [
      "Fast Typing",
      "Microsoft Office",
      "Arabic",
      "English",
      "Accuracy",
      "Productivity",
    ],
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/hand-typing-3d-icon-png-download-9210232.png",
    percent: 80,
    color: "gray",
  },
];


export default function SkillSlider() {
    return (
        <div
            id="centered"
            data-carousel='{ "loadingClasses": "opacity-0", "isCentered": true, "slidesQty": { "xs": 1, "lg": 2 } }'
            className="relative w-full"
        >
            <div className="carousel h-80">
                <div className="carousel-body h-full flex items-center justify-center opacity-0">
                    {skills.map((skillInfo, index) => (
                        <div key={index} className="carousel-slide px-1">
                            <Skill
                                title={skillInfo.title}
                                tags={skillInfo.tags}
                                icon={skillInfo.icon}
                                percent={skillInfo.percent}
                                color={skillInfo.color}
                                ImgStyle={skillInfo.ImgStyle}
                            />
                        </div>
                    ))}
                </div>
            </div>
            < button type="button" className="carousel-prev inset-s-5 max-sm:inset-s-3 carousel-disabled:opacity-50 size-9.5 bg-black flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm border border-b-fuchsia-950" >
                <span className="size-5 cursor-pointer text-center">←</span>
                <span className="sr-only">Previous</span>
            </button >
            {/* <!-- Next Slide --> */}
            < button type="button" className="carousel-next inset-e-5 max-sm:inset-e-3 carousel-disabled:opacity-50 size-9.5 bg-black flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm border border-b-fuchsia-950" >
                <span className="size-5">→</span>
                <span className="sr-only">Next</span>
            </button >
        </div >
    );
}