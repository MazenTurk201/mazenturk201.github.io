import TurkImo from '../../src/assets/images/turkImo.png';
import RotatingText from "../../components/RotatingText";
import iconsRow from "@/components/iconsRow";
import jobsName from "@/components/globalData";
import TextPressureProps from "@/components/textPressureWedgit";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/animate-ui/components/animate/tooltip';




function headerContent() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left w-full z-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <img
              src={TurkImo}
              alt="Me Logo"
              className="w-90 md:w-150 h-auto"
            />
          </TooltipTrigger>
          <TooltipContent>
            <div className='whoisme'><p className='text-xl'>Turk</p></div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="flex flex-col items-center md:items-start gap-4 w-full">
        {TextPressureProps()}
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