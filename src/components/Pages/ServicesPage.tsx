import AnimatedBlurText from "@/components/Utilties/animatedBlurText";

export default function Services() {
    return (
        <>
            <main className="flex flex-1 h-full w-full flex-col items-center justify-center bg-white dark:bg-black">
                <h1>{AnimatedBlurText("Services", "top", 200)}</h1>
            </main>
        </>
    )
}