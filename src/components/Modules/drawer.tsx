import { useState } from "react";
import AnimatedBlurText from "@/components/Utilties/animatedBlurText";
import { Link } from "react-router-dom";

const SidebarDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  function ItemDrawer(path: string, name: string) {
    return (
      <li className="py-2">
        <Link to={path} className="" onClick={() => setIsOpen(false)}>
          {AnimatedBlurText(name, "bottom", 200)}
        </Link>
      </li>
    );
  }


  return (
    <div className="relative">
      {/* الزرار اللي بيفتح ويقفل  */}
      {/* sm:hidden */}
      <i onClick={() => setIsOpen(!isOpen)} className="menuiconbutton bi bi-list"></i>

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
            {ItemDrawer("/", "Main")}
            {ItemDrawer("/contact", "Contact")}
            {ItemDrawer("/donate", "Donate")}
            {ItemDrawer("/about", "About")}
            {ItemDrawer("/services", "Services")}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarDrawer;