import ScrollReveal from '../ReactBits/ScrollReveal';

type ScrollToTextProps = {
    text: string;
};

export default function ScrollToText({ text }: ScrollToTextProps) {
    return <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={3}
        blurStrength={4}
        textClassName='whitespace-pre-line'
    >
        {text}
    </ScrollReveal>
};