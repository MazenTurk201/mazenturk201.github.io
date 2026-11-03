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
    link: "tel:*9*7*01092130013*20#",
    isCopy: false
  }, {
    icon: "https://play-lh.googleusercontent.com/Pv1p8v-KJq4Z_LLOjQjBZpK8DNJg4Zb5aNOQY7WfoiHR4Gfs165Z1TTNMThZ883Yfg=w240-h480-rw",
    name: "Instapay",
    link: "https://ipn.eg/S/mazenturk201/instapay/6rKTP3",
    isCopy: false
  }, {
    icon: "https://mazenturk201.github.io/Love-Choice/assets/images/paypal.png",
    name: "PayPal",
    link: "https://www.paypal.com/paypalme/fesbok",
    isCopy: false
  }, {
    icon: "https://cdn6.aptoide.com/imgs/d/3/4/d348ecefc59798c34d2be3507044163c_icon.png",
    name: "Orange Cash",
    link: "tel:*115*1*1*01092130013*20#",
    isCopy: false
  }, {
    icon: "https://images.seeklogo.com/logo-png/58/1/etisalat-and-logo-png_seeklogo-588606.png",
    name: "Etisalat Cash",
    link: "tel:*777*01092130013*20#",
    isCopy: false
  }, {
    icon: "https://play-lh.googleusercontent.com/RHj9H01qk_KoZkkNACWqucGlGv_oeEh6AXBpDDikTfbLABetwGT4cRKZnaz0D0ml0bgrWXyt4dBopuRFMEHZ=w240-h480-rw",
    name: "WE Pay",
    link: "tel:*322*20*01092130013#",
    isCopy: false
  }, {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY9Iv9fWFShIajbXxO4jHtRyvK9HPiVpPtK0b1XjR_SRIbhM2JeJmuNeCHQEExnVh890Q&usqp=CAU",
    name: "Buy me a Coffee",
    link: "https://buymeacoffee.com/maznktrl",
    isCopy: false
  }, {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpLXXEI7DM1xH24Fy_7iBBr79SJEamfgygVQ5Rf0ZK0Fs-5fad1TmWgc&s=10",
    name: "Bybit",
    link: "570397405",
    isCopy: true
  }, {
    icon: "https://cdn-icons-png.flaticon.com/512/1978/1978543.png",
    name: "Crypto (BSC/BEP20)",
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
    categoryName: "كاميرات المراقبة وأنظمة الأمن",
    items: [
      {
        id: "cctv_analog_install",
        name: "تركيب كاميرا Analog HD (مصنعية)",
        price: 300,
        subOptions: [
          { id: "cctv_2mp", name: "كاميرا 2MP", price: 0 },
          { id: "cctv_5mp", name: "كاميرا 5MP", price: 100 },
          { id: "cctv_8mp", name: "كاميرا 8MP", price: 200 }
        ]
      },
      { id: "cctv_ip_install", name: "تركيب كاميرا IP", price: 450 },
      { id: "cctv_wifi_install", name: "تركيب كاميرا Wi-Fi", price: 300 },
      { id: "cctv_cable", name: "تمديد كابل كاميرات لكل نقطة", price: 150 },
      { id: "cctv_bnc", name: "تركيب رأس BNC / DC", price: 10 },
      { id: "cctv_dvr", name: "تركيب وإعداد DVR", price: 400 },
      { id: "cctv_nvr", name: "تركيب وإعداد NVR", price: 500 },
      {
        id: "cctv_mobile",
        name: "ربط كاميرات المراقبة بالموبايل",
        price: 250,
        subOptions: [
          { id: "hik_connect", name: "Hik-Connect", price: 50 },
        ]
      },
      { id: "cctv_repair", name: "صيانة DVR/NVR", price: 350 },
      { id: "cctv_no_signal", name: "حل مشكلة No Signal", price: 200 },
      { id: "cctv_maintenance", name: "صيانة كاميرا مراقبة", price: 100 },
      { id: "cctv_site", name: "معاينة موقع تركيب كاميرات", price: 200 },
      {
        id: "cctv_package_4",
        name: "باقة 4 كاميرات Analog كاملة دقة 2MP",
        price: 7000,
        subOptions: [
          { id: "cctv_4_hd", name: "دقة 5MP", price: 2000 },
          { id: "cctv_4_mobile", name: "إضافة ربط بالموبايل", price: 300 }
        ]
      },
      { id: "cctv_package_ip", name: "باقة 4 كاميرات IP كاملة", price: 13000 },
      { id: "cctv_package_8", name: "باقة 8 كاميرات كاملة", price: 18000 }
    ]
  },
  {
    categoryName: "صيانة الكمبيوتر واللاب توب",
    items: [
      {
        id: "windows",
        name: "تنزيل Windows",
        price: 150,
        subOptions: [
          { id: "win10", name: "Windows 10", price: 0 },
          { id: "win11", name: "Windows 11", price: 0 },
          { id: "win_lite", name: "Windows مخفف", price: 50 },
          { id: "office", name: "تثبيت Microsoft Office", price: 100 },
          { id: "drivers", name: "تثبيت جميع التعريفات", price: 50 },
        ]
      },
      { id: "pc_clean", name: "تنظيف الكيسة Desktop", price: 100 },
      { id: "laptop_clean", name: "تنظيف اللاب توب داخلياً", price: 100 },
      { id: "thermal", name: "تغيير المعجون الحراري", price: 50 },
      { id: "full_maintenance", name: "تنظيف وتغيير معجون", price: 150 },
      { id: "ssd_install", name: "تركيب SSD", price: 100 },
      { id: "ram_upgrade", name: "ترقية RAM", price: 150 },
      { id: "windows_ssd", name: "نقل Windows إلى SSD", price: 200 },
      { id: "partition", name: "تقسيم وتنظيم الهارد", price: 50 },
      { id: "driver_repair", name: "حل مشاكل التعريفات", price: 150 },
      { id: "data_backup", name: "نسخ احتياطي للبيانات", price: 200 },
      { id: "data_recovery", name: "استعادة بيانات بسيطة", price: 300 },
      { id: "bypass_windows", name: "إزالة باسورد الويندوز", price: 150 }
    ]
  },
  {
    categoryName: "الشبكات والإنترنت",
    items: [
      { id: "router_setup", name: "إعداد راوتر جديد", price: 200 },
      { id: "wifi_config", name: "ضبط إعدادات Wi-Fi", price: 100 },
      { id: "access_point", name: "إعداد Access Point", price: 250 },
      { id: "range_extender", name: "تركيب Range Extender", price: 200 },
      { id: "ethernet", name: "تمديد كابل Ethernet", price: 75 },
      { id: "rj45", name: "تركيب رأس RJ45", price: 20 },
      { id: "lan_setup", name: "إعداد شبكة LAN", price: 300 },
      { id: "network_sharing", name: "مشاركة الملفات والطابعات", price: 25 },
      { id: "static_ip", name: "إعداد Static IP", price: 10 }
    ]
  },
  {
    categoryName: "الطابعات والماسحات الضوئية",
    items: [
      { id: "printer_driver", name: "تثبيت تعريف الطابعة", price: 25 },
      { id: "printer_wifi", name: "توصيل الطابعة Wi-Fi", price: 25 },
      { id: "printer_network", name: "مشاركة الطابعة على الشبكة", price: 25 },
      { id: "printer_fix", name: "حل مشاكل الطباعة", price: 50 },
      { id: "printer_clean", name: "تنظيف الطابعة", price: 50 },
      { id: "printer_repair", name: "صيانة أعطال الطابعة", price: 100 }
    ]
  },
  {
    categoryName: "تصميم وبرمجة المواقع",
    items: [
      { id: "landing_page", name: "تصميم Landing Page", price: 5000 },
      { id: "portfolio", name: "إنشاء Portfolio شخصي", price: 6000 },
      { id: "business_website", name: "موقع شركة تعريفي", price: 12000 },
      { id: "multi_page", name: "موقع متعدد الصفحات", price: 15000 },
      { id: "bilingual", name: "موقع عربي وإنجليزي", price: 18000 },
      { id: "ecommerce", name: "متجر إلكتروني", price: 25000 },
      { id: "dashboard", name: "لوحة تحكم Admin Dashboard", price: 5000 },
      { id: "responsive", name: "تحسين Responsive Design", price: 2000 },
      { id: "api_frontend", name: "ربط الموقع بـ API", price: 1500 },
      { id: "website_auth", name: "تسجيل دخول وحسابات مستخدمين", price: 2500 },
      { id: "cms", name: "نظام إدارة محتوى CMS", price: 4000 },
      { id: "seo", name: "تهيئة SEO أساسية", price: 1000 },
      { id: "speed", name: "تحسين سرعة الموقع", price: 1000 },
      { id: "deploy_web", name: "نشر الموقع واستضافته", price: 750 },
      { id: "website_maintenance", name: "صيانة الموقع شهرياً", price: 500 }
    ]
  },
  {
    categoryName: "أنظمة الشركات والإدارة ERP",
    items: [
      { id: "employee_system", name: "نظام إدارة الموظفين", price: 5000 },
      { id: "inventory", name: "نظام إدارة المخازن", price: 5000 },
      { id: "sales_system", name: "نظام المبيعات والفواتير", price: 15000 },
      { id: "pos", name: "نظام POS للكاشير", price: 8000 },
      { id: "cafe_system", name: "نظام إدارة مطعم أو كافيه", price: 10000 },
      { id: "clinic_system", name: "نظام إدارة عيادة", price: 10000 },
      { id: "erp", name: "نظام ERP متكامل", price: 40000 },
      { id: "crm", name: "نظام CRM لإدارة العملاء", price: 15000 },
      { id: "booking", name: "نظام حجوزات", price: 12000 },
      { id: "attendance", name: "نظام حضور وانصراف", price: 1000 },
      { id: "delivery", name: "نظام إدارة التوصيل", price: 5000 },
      { id: "dynamic_permissions", name: "نظام صلاحيات ديناميكي", price: 1000 },
      { id: "roles", name: "نظام Roles & Permissions", price: 4000 },
      { id: "admin_dashboard", name: "لوحة تحكم إدارية", price: 2000 },
      { id: "reports", name: "تقارير وإحصائيات", price: 2500 },
      { id: "signalr", name: "إشعارات لحظية باستخدام SignalR", price: 3000 }
    ]
  },
  {
    categoryName: "برمجة Backend و ASP.NET Core",
    items: [
      { id: "web_api", name: "إنشاء ASP.NET Core Web API", price: 4000 },
      { id: "crud", name: "إنشاء CRUD API", price: 500 },
      { id: "jwt", name: "نظام Authentication باستخدام JWT", price: 1000 },
      { id: "identity", name: "إعداد ASP.NET Identity", price: 1000 },
      { id: "sql_connect", name: "ربط SQL Server", price: 100 },
      { id: "db_design", name: "تصميم Database Schema", price: 1500 },
      { id: "ef_core", name: "إعداد Entity Framework Core", price: 100 },
      { id: "migrations", name: "إعداد Database Migrations", price: 150 },
      { id: "authorization", name: "نظام Authorization وصلاحيات", price: 100 },
      { id: "file_upload", name: "نظام رفع الملفات والصور", price: 1000 },
      { id: "email_service", name: "خدمة إرسال Email", price: 250 },
      { id: "payment", name: "ربط Payment Gateway", price: 3000 },
      { id: "swagger", name: "توثيق API باستخدام Swagger", price: 200 },
      { id: "frontend_backend", name: "ربط Frontend مع Backend", price: 1000 }
    ]
  },
  {
    categoryName: "تطبيقات الموبايل Flutter",
    items: [
      { id: "flutter_basic", name: "تطبيق Flutter بسيط", price: 12000 },
      { id: "flutter_medium", name: "تطبيق Flutter متوسط", price: 20000 },
      { id: "flutter_advanced", name: "تطبيق Flutter متقدم", price: 35000 },
      { id: "flutter_store", name: "تطبيق متجر إلكتروني", price: 25000 },
      { id: "flutter_restaurant", name: "تطبيق مطعم وطلبات", price: 20000 },
      { id: "flutter_auth", name: "تسجيل دخول وحسابات", price: 4000 },
      { id: "firebase", name: "ربط Firebase", price: 2500 },
      { id: "firebase_auth", name: "Firebase Authentication", price: 1500 },
      { id: "firestore", name: "ربط Cloud Firestore", price: 2000 },
      { id: "push", name: "Push Notifications", price: 1500 },
      { id: "google_signin", name: "Google Sign-In", price: 1000 },
      { id: "sqlite", name: "SQLite / Local Database", price: 1500 },
      { id: "flutter_api", name: "ربط التطبيق بـ REST API", price: 2000 },
      { id: "play_store", name: "رفع التطبيق على Google Play", price: 1500 },
      { id: "release", name: "تجهيز نسخة Release", price: 500 },
      { id: "app_maintenance", name: "صيانة تطبيق شهرياً", price: 500 }
    ]
  },
  {
    categoryName: "قواعد البيانات SQL Server",
    items: [
      { id: "schema", name: "تصميم Database Schema", price: 1500 },
      { id: "sql_tables", name: "إنشاء الجداول والعلاقات", price: 1000 },
      { id: "sql_queries", name: "كتابة SQL Queries", price: 500 },
      { id: "stored", name: "كتابة Stored Procedures", price: 500 },
      { id: "sql_backup", name: "Database Backup & Restore", price: 500 },
      { id: "db_migration", name: "نقل قاعدة البيانات", price: 500 },
      { id: "sql_server", name: "إعداد SQL Server", price: 1000 },
      { id: "ef_database", name: "ربط EF Core بقاعدة البيانات", price: 750 }
    ]
  }
];


export { jobsName, skills, mediaLinks, donateLinks, servicesData };