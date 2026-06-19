import AnimatedBlurText from "@/components/Utilties/animatedBlurText";

export default function NotFound() {
    return (
        <>
            <main className="flex flex-1 h-full w-full flex-col items-center justify-center bg-white dark:bg-black">
                <h1 className="text-5xl font-bold">{AnimatedBlurText("404 Page Not Found!!", "top", 200)}</h1>
            </main>
        </>
    )
}