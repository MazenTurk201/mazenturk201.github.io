import { useEffect, useState } from "react";
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

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedCode(codeString.slice(0, i));
      i++;
      if (i > codeString.length) clearInterval(timer);
    }, 100); // سرعة الكتابة
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden z-10">
      <SyntaxHighlighter
        language="python"
        style={vscDarkPlus}
        customStyle={{ padding: '20px', borderRadius: '12px', background: 'rgba(120, 0, 255, 0.15)', filter: 'drop-shadow(0px 0px 15px rgba(0, 0, 0, 1))' }}
      >
        {displayedCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default AboutMeCode;