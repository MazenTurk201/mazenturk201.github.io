import { useState } from "react";

const SidebarDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* الزرار اللي بيفتح ويقفل */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-blue-600 text-white rounded-md z-40"
      >
        {isOpen ? 'اقفل القائمة' : 'افتح القائمة'}
      </button>

      {/* الـ Overlay اللي بيقفل لما تدوس عليه */}
      {isOpen && (
        <div
          className="fixed inset-0 blur-md bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* الـ Drawer نفسه */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-black shadow-lg z-30 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">القائمة الجانبية</h2>
          <ul className="mt-4">
            <li className="py-2">حاجة 1</li>
            <li className="py-2">حاجة 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarDrawer;