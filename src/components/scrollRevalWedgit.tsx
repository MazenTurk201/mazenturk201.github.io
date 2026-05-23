import ScrollReveal from '../../components/ScrollReveal';

function scrolltotext(Text: string) {
    return <ScrollReveal
        baseOpacity={0.1}
        enableBlur
        baseRotation={3}
        blurStrength={4}
    >
        {Text}
    </ScrollReveal>
};

export default scrolltotext;