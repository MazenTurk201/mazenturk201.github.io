import { useEffect, useState } from "react";
import Logo from '../../src/assets/images/MT.png';
import AnimatedBlurText from "@/components/animatedBlurText";
import { MenuIcon } from "../../@/components/ui/menu";
import SidebarDrawer from "@/components/drawer";


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
          {/* <Menu animateOnTap /> */}
          <MenuIcon/>
        </button>
        {SidebarDrawer()}
      </div>
    </nav>
  );
}

export default NavBar;