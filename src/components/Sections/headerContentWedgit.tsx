import TurkImo from '../../../src/assets/images/turkImo.png';
import RotatingText from "../ReactBits/RotatingText";
import iconsRow from "@/components/Widgets/iconsRowWidgets";
import { jobsName } from "@/components/Data/globalData";
import SplitText from "@/components/ReactBits/SplitText";



function headerContent() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 txt-center md:text-left w-full z-1">
      <img
        src={TurkImo}
        alt="Logo"
        className="w-90 md:w-100 h-auto logo"
      />
      <div className="flex flex-col items-center md:items-start gap-4 w-full">
        <SplitText
          text="Hello, you!"
          className="text-5xl md:text-9xl font-semibold text-center pb-5"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <svg className="animate-[slideIn_1s_ease-in_forwards]" height="20" viewBox="0 0 200 20" preserveAspectRatio="none" fill="none" style={{ width: 'calc(100% - 0.3em)' }}>
          <path d="M2 14 Q 30 4 60 12 T 120 10 T 198 14" stroke="url(#scribbleGrad)" stroke-width="4" stroke-linecap="round" fill="none"></path>
          <defs>
            <linearGradient id="scribbleGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#A855F7"></stop>
              <stop offset="100%" stop-color="#190143"></stop>
            </linearGradient>
          </defs>
        </svg>
        {iconsRow()}
        <p className="flex gap-2 text-2xl text-zinc-600 dark:text-zinc-400 text-left">
          I'm a {<RotatingText
            texts={jobsName}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom="first"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
            splitBy="characters"
            auto
            loop
          />}.
        </p>
      </div>
    </div>
  )
}

export default headerContent;