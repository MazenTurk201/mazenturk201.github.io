import AnimatedBlurText from "@/components/Utilties/animatedBlurText";

export default function About() {
    return (
        <>
            <h1>{AnimatedBlurText("About Us", "top", 200)}</h1>
        </>
    )
}