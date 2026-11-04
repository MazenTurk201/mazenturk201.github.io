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
        price: 250,
        subOptions: [
          { id: "cctv_2mp", name: "كاميرا 2MP", price: 0 },
          { id: "cctv_5mp", name: "كاميرا 5MP", price: 50 },
          { id: "cctv_8mp", name: "كاميرا 4K / 8MP", price: 100 }
        ]
      },
      { id: "cctv_ip_install", name: "تركيب كاميرا IP (مصنعية)", price: 500 },
      { id: "cctv_wifi_install", name: "تركيب وبرمجة كاميرا Wi-Fi Smart", price: 350 },
      { id: "cctv_cable", name: "تمديد كابل كاميرا (لكل نقطة شامل التثبيت)", price: 200 },
      { id: "cctv_bnc", name: "تركيب وتجميع رؤوس BNC / DC / RJ45", price: 25 },
      { id: "cctv_dvr", name: "تركيب وإعداد DVR / NVR وتثبيت الهارد", price: 500 },
      { id: "cctv_mobile", name: "ربط كاميرات المراقبة بالموبايل", price: 100 },
      { id: "cctv_repair", name: "صيانة أجهزة DVR/NVR واسترجاع التسجيلات", price: 400 },
      { id: "cctv_maintenance", name: "صيانة وفحص كاميرا مراقبة", price: 150 },
      {
        id: "cctv_package_4",
        name: "باقة 4 كاميرات Analog كاملة (2MP + DVR + 1TB + التركيب)",
        price: 3000,
        subOptions: [
          { id: "cctv_4_hd", name: "ترقية لدقة 5MP", price: 500 },
          { id: "cctv_4_mobile", name: "إضافة ربط مباشر بالموبايل", price: 100 },
          { id: "cctv_4_windows", name: "إضافة ربط مباشر الويندوز", price: 150 }
        ]
      },
      { id: "cctv_package_ip", name: "باقة 4 كاميرات IP كاملة (PoE + NVR + 1TB)", price: 5000 },
    ]
  },
  {
    categoryName: "صيانة الكمبيوتر واللاب توب",
    items: [
      {
        id: "windows",
        name: "تنزيل Windows أصلية بالبرامج الأساسية",
        price: 150,
        subOptions: [
          { id: "winxp", name: "Windows XP", price: 0 },
          { id: "win7", name: "Windows 7 Pro", price: 0 },
          { id: "win10", name: "Windows 10 Pro", price: 0 },
          { id: "win11", name: "Windows 11 Pro", price: 0 },
          { id: "win_lite", name: "Windows مخفف للأداء العالي", price: 50 },
          { id: "office", name: "تثبيت وتفعيل Microsoft Office", price: 100 },
          { id: "drivers", name: "تثبيت وتحديث جميع التعريفات", price: 50 }
        ]
      },
      { 
        id: "linux_install",
        name: "تثبيت وإعداد نظام Linux (Fedora / Ubuntu) وتضبيط البيئة",
        price: 100,
        subOptions: [
          { id: "kali", name: "Kali Linux", price: 100 },
          { id: "fedora", name: "Fedora Linux", price: 0 },
          { id: "ubuntu", name: "Ubuntu Linux", price: 0 },
          { id: "debian", name: "Debian Linux", price: 0 },
          { id: "parrot", name: "Parrot OS", price: 0 },
          { id: "arch", name: "Arch Linux", price: 200 },
          { id: "black_arch", name: "Black Arch Linux", price: 250 },
        ]
      },
      { id: "pc_clean", name: "تنظيف كيسة Desktop وتنسيق الكابلات", price: 50 },
      { id: "laptop_clean", name: "تنظيف اللاب توب داخلياً وإزالة الأتربة", price: 100 },
      { id: "thermal", name: "تغيير المعجون الحراري", price: 50 },
      { id: "ssd_install", name: "تركيب SSD ونقل النظام بالكامل (Cloning)", price: 200 },
      { id: "ram_upgrade", name: "ترقية وتركيب RAM واختبار الاستقرار", price: 150 },
      { id: "data_backup", name: "نسخ احتياطي ونقل بيانات", price: 250 },
      { id: "data_recovery", name: "محاولة استعادة الملفات المحذوفة أو من هارد تالف", price: 500 },
      { id: "bypass_windows", name: "إزالة وفك باسورد الويندوز", price: 200 }
    ]
  },
  {
    categoryName: "الشبكات والإنترنت وتجهيز السيرفرات",
    items: [
      { id: "router_setup", name: "إعداد راوتر جديد وتأمين شبكة الواي فاي", price: 200 },
      { id: "wifi_config", name: "ضبط وتحسين إشارات Wi-Fi", price: 150 },
      { id: "access_point", name: "إعداد وبرمجة Access Point", price: 300 },
      { id: "range_extender", name: "تركيب وبرمجة Range Extender", price: 250 },
      { id: "ethernet", name: "تمديد كابل Ethernet وإختباره بالنقطة", price: 150 },
      { id: "rj45", name: "تركيب وانكماش رأس RJ45", price: 25 },
      { id: "lan_setup", name: "إعداد وتأسيس شبكة LAN للأجهزة", price: 400 },
      { id: "rack_setup", name: "تجميع وترتيب راك الشبكات (Network Rack Management)", price: 1200 },
      { id: "mikrotik_setup", name: "إعداد وبرمجة سيرفر مايكروتك (MikroTik) وتوزيع السرعات", price: 1500 },
      { id: "network_sharing", name: "مشاركة الملفات والطابعات عبر الشبكة المحلية", price: 200 },
      { id: "static_ip", name: "إعداد Static IP وتوجيه المنافذ", price: 200 }
    ]
  },
  {
    categoryName: "الطابعات والماسحات الضوئية",
    items: [
      { id: "printer_driver", name: "تثبيت تعريف الطابعة وتضبيطها", price: 100 },
      { id: "printer_wifi", name: "توصيل وبرمجة الطابعة Wi-Fi", price: 150 },
      { id: "printer_network", name: "مشاركة الطابعة على شبكة المكتب", price: 200 },
      { id: "printer_fix", name: "حل مشاكل الورق والتعليق والطباعة", price: 150 },
      { id: "printer_clean", name: "تنظيف رؤوس الحبر والبيبر بات", price: 200 },
      { id: "printer_repair", name: "صيانة أعطال الطابعات الميكانيكية", price: 350 }
    ]
  },
  {
    categoryName: "تصميم وبرمجة المواقع (Full-Stack / React / TS)",
    items: [
      { id: "landing_page", name: "تصميم وتنفيذ Landing Page احترافية", price: 500 },
      { id: "portfolio", name: "إنشاء Portfolio شخصي مميز", price: 1000 },
      { id: "business_website", name: "موقع شركة تعريفي متكامل", price: 12000 },
      { id: "multi_page", name: "موقع متعدد الصفحات (Multi-page App)", price: 6000 },
      { id: "bilingual", name: "موقع ثنائي اللغة (عربي / إنجليزي)", price: 1000 },
      { id: "ecommerce", name: "متجر إلكتروني متكامل", price: 5000 },
      { id: "dashboard", name: "لوحة تحكم Admin Dashboard مخصصة", price: 3000 },
      { id: "responsive", name: "تحسين وتضبيط Responsive Design للموبايل", price: 2500 },
      { id: "website_auth", name: "نظام تسجيل دخول وحسابات مستخدمين", price: 3000 },
      { id: "seo", name: "تهيئة محركات البحث SEO أساسية", price: 1500 },
      { id: "deploy_web", name: "نشر الموقع، إعداد الدومين والاستضافة (Deployment)", price: 1500 },
    ]
  },
  {
    categoryName: "أنظمة الشركات والإدارة ERP",
    items: [
      { id: "employee_system", name: "نظام إدارة الموظفين وشؤون العاملين", price: 6000 },
      { id: "inventory", name: "نظام إدارة المخازن وحركة البضائع", price: 5000 },
      { id: "sales_system", name: "نظام المبيعات وحساب الفواتير", price: 6000 },
      { id: "pos", name: "نظام نقاط البيع للكاشير (POS)", price: 9000 },
      { id: "cafe_system", name: "نظام إدارة المطاعم والكافيهات", price: 9000 },
      { id: "clinic_system", name: "نظام إدارة العيادات الطبية", price: 9000 },
      { id: "erp", name: "نظام ERP متكامل للشركات", price: 15000 },
      { id: "booking", name: "نظام حجوزات وإدارة مواعيد", price: 10000 },
      { id: "attendance", name: "نظام حضور وانصراف مرتبط بالبصمة", price: 2500 },
      { id: "delivery", name: "نظام إدارة التوصيل والدليفري", price: 6000 },
      { id: "roles", name: "نظام الصلاحيات الديناميكي Roles & Permissions", price: 4000 },
      { id: "reports", name: "تقارير مالية وإحصائيات متقدمة", price: 3000 },
      { id: "signalr", name: "إشعارات لحظية وتحديثات بـ SignalR", price: 3500 }
    ]
  },
  {
    categoryName: "برمجة Backend و ASP.NET Core",
    items: [
      { id: "web_api", name: "إنشاء ASP.NET Core Web API احترافية", price: 5000 },
      { id: "crud", name: "إنشاء CRUD API متكاملة", price: 500 },
      { id: "clean_arch", name: "هيكلة المشروع بـ Clean Architecture", price: 100 },
      { id: "jwt", name: "نظام Authentication باستخدام JWT", price: 1500 },
      { id: "identity", name: "إعداد ASP.NET Identity وإدارة المستخدمين", price: 1500 },
      { id: "db_design", name: "تصميم Database Schema وعلاقات الجداول", price: 1000 },
      { id: "ef_core", name: "إعداد وتحسين Entity Framework Core", price: 500 },
      { id: "authorization", name: "نظام صلاحيات متقدم Role-Based / Policy-Based", price: 1000 },
      { id: "file_upload", name: "نظام رفع ومعالجة الملفات والصور", price: 1000 },
      { id: "email_service", name: "خدمة إرسال الإشعارات والإيميلات (SMTP)", price: 500 },
      { id: "payment", name: "ربط بوابة دفع إلكتروني (Payment Gateway)", price: 2000 },
      { id: "swagger", name: "توثيق واختبار API باستخدام Swagger", price: 500 },
      { id: "frontend_backend", name: "ربط واجهة Frontend بـ ASP.NET Backend", price: 1500 }
    ]
  },
  {
    categoryName: "تطبيقات الموبايل Flutter",
    items: [
      { id: "flutter_basic", name: "تطبيق Flutter مخصص", price: 1000, 
        subOptions: [
          { id: "flutter_basic_page", name: "صفحة إضافية", price: 100 },
          { id: "flutter_basic_state", name: "State Management", price: 250 },
          { id: "flutter_basic_firebase", name: "Firebase Integration", price: 100 },
          { id: "flutter_basic_deep_linking", name: "Deep Linking", price: 250 },
          { id: "flutter_basic_push_notifications", name: "Push Notifications", price: 150 },
          { id: "flutter_basic_c", name: "Custom Features", price: 100 },
          { id: "flutter_basic_animations", name: "Animations", price: 300 },
          { id: "flutter_basic_database", name: "Database Integration", price: 100 },
          { id: "flutter_basic_google_signin", name: "Google Sign-In", price: 100 },
          { id: "flutter_basic_check_update", name: "Check Update", price: 100 },
        ]
       },
      { id: "flutter_store", name: "تطبيق متجر إلكتروني Flutter", price: 3000 },
      { id: "flutter_restaurant", name: "تطبيق مطعم وطلبات (Client & Delivery)", price: 8000 },
      { id: "flutter_api", name: "ربط التطبيق بـ REST API الخارجية", price: 1500 },
      { id: "play_store", name: "رفع التطبيق على Google Play و App Signing", price: 2000 }
    ]
  },
  {
    categoryName: "قواعد البيانات SQL Server",
    items: [
      { id: "schema", name: "تصميم Database Schema وهندسة الجداول", price: 1000 },
      { id: "sql_tables", name: "إنشاء الجداول والعلاقات والقيود Constraints", price: 1000 },
      { id: "stored", name: "كتابة وتحسين Stored Procedures المعقدة", price: 1500 },
      { id: "sql_backup", name: "إعداد استراتيجيات Backup & Restore", price: 1000 },
      { id: "db_migration", name: "نقل وترحيل قواعد البيانات", price: 1500 },
      { id: "sql_server", name: "تثبيت وإعداد SQL Server وصلاحياته", price: 1500 },
      { id: "ef_database", name: "ربط وتكوين EF Core مع قاعدة البيانات", price: 1500 }
    ]
  }
];


export { jobsName, skills, mediaLinks, donateLinks, servicesData };