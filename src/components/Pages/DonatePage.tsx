import TurkImo from '../../../src/assets/images/turkImo.png';
import AnimatedBlurText from "@/components/Utilties/animatedBlurText";
import DonateSection from "@/components/Sections/donateSection";

export default function Donate() {
    return (
        <>
            <main className="flex flex-1 h-full w-full flex-col items-center justify-center bg-white dark:bg-black">
                <h1 className="text-5xl font-bold">{AnimatedBlurText("Donate Me", "top", 200)}</h1>
                <img
                    src={TurkImo}
                    alt="Logo"
                    className="w-90 md:w-100 h-auto logo"
                />
                <DonateSection />
            </main>
        </>
    )
}