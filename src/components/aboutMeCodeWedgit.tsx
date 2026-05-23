import { useEffect, useState } from "react";
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AboutMeCode = () => {
  const codeString = `
class Turk:
  def __init__(self):
    self.name = "Mazen Sameh"
    self.age = 20
    self.bd = "2006/8/31"
    self.contry = "Egypt"
    self.skills = ["Python", "Flutter", "Embedded Systems"]
    self.status = "Developing cool stuff"

  def __str__(self):
    return f"{self.name} is a {', '.join(self.skills)} expert."

me = Turk()
print(me)
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
    <div className="w-full overflow-hidden">
      <SyntaxHighlighter
        language="python"
        style={vscDarkPlus}
        customStyle={{ padding: '20px', borderRadius: '12px', background: 'rgba(120, 0, 255, 0.15)' }}
      >
        {displayedCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default AboutMeCode;