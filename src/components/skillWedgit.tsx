import { useEffect, useMemo, useState } from "react";

interface ProgressDemoProps {
  initialValue: number;
  color?: string;
}

export const RadixProgressDemo: React.FC<ProgressDemoProps> = ({ initialValue, color = 'purple' }) => {
  // بنبدأ من 0 عشان الأنيميشن يظهر وهو بيتحرك من الصفر للقيمة المطلوبة
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // بنستنى لقطة صغيرة (تيك فريم) عشان الـ DOM يلحق يستوعب الصفر قبل ما نغير القيمة
    const timer = setTimeout(() => {
      // بنضمن إن القيمة متعديش 100 وماتقلش عن 0 لحماية الـ UI
      const safeValue = Math.min(Math.max(initialValue, 0), 100);
      setProgress(safeValue);
    }, 100);

    return () => clearTimeout(timer);
  }, [initialValue]); // لو الـ initialValue اتغيرت من بره، الـ بار هيتحرك للمكان الجديد بالأنيميشن

  return (
    <div className="w-75 bg-gray-200 h-2 rounded-full overflow-hidden">
      <div
        className="h-full transition-all duration-1000 ease-out"
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
    </div>
  );
};



function skill({ title, tags, icon, percent, color, isIconLeft, ImgStyle }: { title: string, tags: string[], icon: string, percent: number, color: string, isIconLeft: boolean, ImgStyle?: string }) {
  const randomDelay = useMemo(() => `${Math.random() * 3}s`, []);
  let iconBode = <div>
    <img src={icon} alt={title as string} className={`w-30 not-sm:w-50 h-auto glow zoomAnim ${ImgStyle ?? ""}`} style={{ animationDelay: randomDelay }} />
  </div>
  let contentBody = <div className='flex flex-col justify-center items-center gap-3'>
    {title}
    <div className='grid grid-cols-6 gap-2 w-full'>
      {tags.map((tag, index) => (
        <span key={index} className="tag small">
          {tag}
        </span>
      ))
      }
    </div>
    {<RadixProgressDemo initialValue={percent} color={color} />}
  </div>
  return <div className='flex gap-5 h-30 items-center justify-center'>
    {isIconLeft ? iconBode : contentBody}
    <div className='spliter'></div>
    {isIconLeft ? contentBody : iconBode}
  </div>
}

export default skill;