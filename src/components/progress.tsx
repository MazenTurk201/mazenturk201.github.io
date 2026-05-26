import { useEffect, useState } from "react";

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
    <div className="w-9/12 bg-gray-200 h-2 rounded-full overflow-hidden">
      <div
        className="h-full transition-all duration-1000 ease-out"
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
    </div>
  );
};