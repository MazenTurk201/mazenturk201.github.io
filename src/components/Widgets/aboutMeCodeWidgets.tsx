import { useEffect, useRef, useState } from "react";
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AboutMeCode = () => {
  const codeString = `
class Turk:
  def __init__(self):
    self.name = "Mazen Sameh Sayed"
    self.age = 20
    self.gender = "Male"
    self.bd = "2006/8/31"
    self.contry = "Egypt"
    self.city = "Cairo"
    self.university = "6th of October Technological"
    self.skills = ["Python", "Flutter", "Embedded Systems"]
    self.certificates = 13
    self.status = "Developing cool stuff"

  def __str__(self):
    return f"{self.name} is a {', '.join(self.skills)} expert."

me = Turk()
print(me) # Mazen Sameh is a Python, Flutter, Embedded Systems expert.
  `;
  const [displayedCode, setDisplayedCode] = useState("");
  const [startAnimation, setStartAnimation] = useState(false); // ستيت عشان نعرف بدأنا ولا لاء
  const containerRef = useRef(null); // ريف عشان نراقب الديف ده

  // 1. الجزء ده بيراقب السكرول لحد ما الكود يظهر في الشاشة
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true); // أول ما يظهر في الشاشة، شغل الأنميشن
          observer.disconnect(); // وبنوقف المراقبة عشان ما يشتغلش تاني لو عمل سكرول فوق وتحت
        }
      },
      { threshold: 0.2 } // هيشتغل أول ما يظهر 20% من الكود في الشاشة
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. الجزء بتاعك اللي بيكتب الكود حرف حرف، بس متكتف بالـ startAnimation
  useEffect(() => {
    if (!startAnimation) return; // لو لسه مظهرش في الشاشة، متعملش حاجة

    let i = 0;
    const timer = setInterval(() => {
      setDisplayedCode(codeString.slice(0, i + 1));
      i++;
      if (i >= codeString.length) clearInterval(timer);
    }, 20);

    return () => clearInterval(timer);
  }, [startAnimation, codeString]);

  return (
    // ضفنا الـ ref هنا عشان المتصفح يراقبه وهو نازل بالسكرول
    <div ref={containerRef} className="w-full overflow-hidden z-10">
      <SyntaxHighlighter
        language="python"
        style={vscDarkPlus}
        customStyle={{
          padding: '20px',
          borderRadius: '12px',
          background: 'rgba(120, 0, 255, 0.15)',
          filter: 'drop-shadow(0px 0px 15px rgba(0, 0, 0, 1))'
        }}
      >
        {displayedCode || " "} {/* حطينا مسافة عشان الـ Highlighter ميبقاش فاضي ويتحرك فجأة */}
      </SyntaxHighlighter>
    </div>
  );
};

export default AboutMeCode;