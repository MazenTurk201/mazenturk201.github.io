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
      "THM Top 2%",
      "Shell Scripting",
      "Nmap",
      "Metasploit",
      "System Admin",
      "Terminal",
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


const mediaLinks = [{
  icon: "bi bi-facebook",
  link: "https://www.facebook.com/mazen.turk.269412/"
}, {
  icon: "bi bi-github",
  link: "https://github.com/MazenTurk201/"
}, {
  icon: "bi bi-whatsapp",
  link: "https://wa.me/201092130013?text=Hi+Turk"
}, {
  icon: "bi bi-telegram",
  link: "https://t.me/mazenturk"
}, {
  icon: "bi bi-discord",
  link: "https://discord.com/channels/@me/983875402651021353"
}, {
  icon: "bi bi-linkedin",
  link: "https://www.linkedin.com/in/mazen-sameh-19a0a2302/"
}, {
  icon: "bi bi-instagram",
  link: "https://instagram.com/mazenturkk"
}, {
  icon: "bi bi-paypal",
  link: "https://www.paypal.com/paypalme/fesbok"
}, {
  icon: "bi bi-youtube",
  link: "https://www.youtube.com/@mazenturk"
}, {
  icon: "bi bi-tiktok",
  link: "https://tiktok.com/@mazenturk"
}, {
  icon: "bi bi-basket2-fill",
  link: "https://payhip.com/mazenturk"
}, {
  icon: "bi bi-cup-hot-fill",
  link: "https://buymeacoffee.com/maznktrl"
}];

const donateLinks = [
  {
    icon: "https://drashrafsoliman.com/wp-content/uploads/2022/06/vc.png",
    name: "Vodafone Cash",
    link: "tel:*9*7*01092130013*20#"
  }, {
    icon: "https://play-lh.googleusercontent.com/Pv1p8v-KJq4Z_LLOjQjBZpK8DNJg4Zb5aNOQY7WfoiHR4Gfs165Z1TTNMThZ883Yfg=w240-h480-rw",
    name: "Instapay",
    link: "https://ipn.eg/S/mazenturk201/instapay/6rKTP3"
  }, {
    icon: "https://mazenturk201.github.io/Love-Choice/assets/images/paypal.png",
    name: "PayPal",
    link: "https://www.paypal.com/paypalme/fesbok"
  }, {
    icon: "https://cdn6.aptoide.com/imgs/d/3/4/d348ecefc59798c34d2be3507044163c_icon.png",
    name: "Orange Cash",
    link: "tel:*115*1*1*01092130013*20#"
  }, {
    icon: "https://www.eand.com.eg/portal/images/etisalat-cash-logo.png",
    name: "Etisalat Cash",
    link: "tel:*777*01092130013*20#"
  }, {
    icon: "https://play-lh.googleusercontent.com/6XZKvhiCf64MnUVMl6KqcWKq97dzql9OVD9ctaNnt1VTtJS3RE6Dsk6GCM7e_8nnOzE=w400-h300-pc0xffffff-pd",
    name: "WE Pay",
    link: "tel:*322*20*01092130013#"
  }, {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY9Iv9fWFShIajbXxO4jHtRyvK9HPiVpPtK0b1XjR_SRIbhM2JeJmuNeCHQEExnVh890Q&usqp=CAU",
    name: "Buy me a Coffee",
    link: "https://buymeacoffee.com/maznktrl"
  }, {
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Tether_USDT.png",
    name: "Crypto USDT (BSC/BEP20)",
    link: "0x2b92032fdba5f017007306f89b55e7336c82883a",
    isCopy: true
  }
];

interface SubOption {
    id: string;
    name: string;
    price: number;
}

interface ServiceItem {
    id: string;
    name: string;
    price: number;
    subOptions?: SubOption[];
}

interface ServiceCategory {
    categoryName: string;
    items: ServiceItem[];
}

const servicesData: ServiceCategory[] = [
    {
        categoryName: "خدمات الهارد وير",
        items: [
            { 
                id: "win_install", 
                name: "تنزيل نسخة ويندوز", 
                price: 10,
                subOptions: [
                    { id: "win11", name: "ويندوز 11 الأصلي", price: 5 },
                    { id: "office", name: "حزمة أوفيس كاملة", price: 5 }
                ]
            },
            { id: "pc_clean", name: "تنظيف الكيسة وتغيير المعجون البارد", price: 15 }
        ]
    },
    {
        categoryName: "خدمات المواقع",
        items: [
            { 
                id: "web_dev", 
                name: "برمجة موقع كامل (React)", 
                price: 150,
                subOptions: [
                    { id: "dashboard", name: "لوحة تحكم إدارية", price: 50 },
                    { id: "seo", name: "تهيئة سيو SEO", price: 20 }
                ]
            },
            { id: "landing_page", name: "تصميم صفحة هبوط (Landing Page)", price: 40 }
        ]
    },
    {
        categoryName: "خدمات الموبايل",
        items: [
            { id: "flutter_app", name: "برمجة تطبيق موبايل (Flutter)", price: 200 },
            { id: "app_publish", name: "رفع التطبيق على جوجل بلاي", price: 30 }
        ]
    }
];

export { jobsName, skills, mediaLinks, donateLinks, servicesData };