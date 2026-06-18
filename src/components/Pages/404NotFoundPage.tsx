import AnimatedBlurText from "@/components/Utilties/animatedBlurText";

export default function NotFound() {
    return (
        <>
            <h1>{AnimatedBlurText("404 Not Found", "top", 200)}</h1>
        </>
    )
}