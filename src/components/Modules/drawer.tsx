import { useState } from "react";
import { MenuIcon } from "../../../@/components/ui/menu";
import AnimatedBlurText from "../Utilties/animatedBlurText";

const SidebarDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* الزرار اللي بيفتح ويقفل  */}
      {/* sm:hidden */}
      <MenuIcon onClick={() => setIsOpen(!isOpen)} className="menuiconbutton" />

      {/* الـ Overlay اللي بيقفل لما تدوس عليه */}
      {isOpen && (
        <div
          className="fixed inset-0 blur-md bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* الـ Drawer نفسه */}
      <div
        className={`fixed top-0 right-0 h-screen z-20 w-64 bg-white dark:bg-black transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-4 pt-20">
          <h2 className="text-3xl font-bold relative -top-15 -left-10">Welcome!!</h2>
          <ul className="-mt-10">
            <li className="py-2"><a href="/" target="_blank" rel="noopener noreferrer">{AnimatedBlurText("Main", "top", 200)}</a></li>
            <li className="py-2"><a href="#" target="_blank" rel="noopener noreferrer">{AnimatedBlurText("Contact", "bottom", 170)}</a></li>
            <li className="py-2"><a href="#" target="_blank" rel="noopener noreferrer">{AnimatedBlurText("About", "bottom", 150)}</a></li>
            <li className="py-2"><a href="#" target="_blank" rel="noopener noreferrer">{AnimatedBlurText("Services", "bottom", 130)}</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarDrawer;