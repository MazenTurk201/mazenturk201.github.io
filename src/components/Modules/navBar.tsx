import { useEffect, useState } from "react";
import Logo from '../../../src/assets/images/MT.png';
import AnimatedBlurText from "@/components/Utilties/animatedBlurText";
import SidebarDrawer from "@/components/Modules/drawer";


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
    <nav className={`max-w-dvw h-16 flex items-center justify-between px-8 fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/30 dark:bg-black/30 backdrop-blur drop-shadow-2xl' : 'bg-transparent'}`}>
      <div className="flex items-center gap-5">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        <div className='not-sm:hidden'>{AnimatedBlurText("Mazen Sameh", "top", 90, true)}</div>
      </div>
      <div className="flex items-center justify-center">
        <div className={`w-10 bg-white/30 dark:bg-black/30`}>
          <SidebarDrawer />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;