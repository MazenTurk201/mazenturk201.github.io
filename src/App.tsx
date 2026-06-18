import '@/App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from "@/components/Modules/navBar";
import Footer from "@/components/Modules/footerWedgit";
import DotsBackground from "@/components/Modules/dotsBackground";
import Main from '@/components/Pages/MainPage';
import NotFound from '@/components/Pages/404NotFoundPage';
import About from '@/components/Pages/AboutPage';
import Services from '@/components/Pages/ServicesPage';
import Donate from '@/components/Pages/DonatePage';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-dvh h-full items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <NavBar />
        <DotsBackground />
        <main className="flex flex-1 w-full flex-col items-center justify-between py-22 md:pt-32 px-16 bg-white dark:bg-black not-sm:p-5">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;