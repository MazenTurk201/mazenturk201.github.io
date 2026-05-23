import TextPressure from '../../components/TextPressure';

function TextPressureProps() {
  return (
    <div style={{ position: 'relative', }}>
      <TextPressure
        text="Hello!"
        flex
        alpha={false}
        stroke={false}
        width
        weight
        italic
        textColor="#ffffff"
        strokeColor="#5227FF"
        minFontSize={36}
      />
    </div>
  )
};

export default TextPressureProps;