import BlurText from "../../components/BlurText";

function AnimatedBlurText(Text: string, Direction: "top" | "bottom" = "top", Delay: number = 90, isTitle: boolean = false) {
  return (
    <BlurText
      text={Text}
      delay={Delay}
      animateBy="words"
      direction={Direction}
      className={isTitle ? "text-2xl font-bold text-black dark:text-zinc-50" : "text-xl text-black dark:text-zinc-50"}
    />
  )
};

export default AnimatedBlurText;