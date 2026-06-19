import AnimatedBlurText from "@/components/Utilties/animatedBlurText";

export default function About() {
    return (
        <>
        <main className="flex flex-1 h-full w-full flex-col items-center justify-center bg-white dark:bg-black">
            <h1 className="text-5xl font-bold">{AnimatedBlurText("About Us", "top", 200)}</h1>
            <div className="mt-10">
                
                <p className="text-lg">
                    Welcome to our about page! Here you can learn more about us and what we do.
                </p>
            </div>
        </main>
        </>
    )
}