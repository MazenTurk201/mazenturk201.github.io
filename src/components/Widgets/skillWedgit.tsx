import { useMemo, } from "react";
import { RadixProgressDemo } from "@/components/Widgets/progress";




export default function skill({ title, tags, icon, percent, color, ImgStyle }: { title: string, tags: string[], icon: string, percent: number, color: string, ImgStyle?: string }) {
  const randomDelay = useMemo(() => `${Math.random() * 3}s`, []);
  let IconBody = <div>
    <img src={icon} alt={title as string} className={`w-30 md:w-20 h-auto flex-1 glow zoomAnim ${ImgStyle ?? ""}`} style={{ animationDelay: randomDelay }} />
  </div>
  let ContentBody = <div className='flex flex-col justify-center items-center gap-3 md:w-1/2'>
    {title}
    <div className="w-9/12 md:w-full overflow-x-auto">
      <div className="flex flex-col items-center justify-center flex-wrap gap-2 h-20 min-w-max">
        {tags.map((tag, index) => (
          <span key={index} className="tag small whitespace-nowrap">
            {tag}
          </span>
        ))}
      </div>
    </div>
    {<RadixProgressDemo initialValue={percent} color={color} />}
  </div>
  return <div className='flex flex-col md:flex-row gap-5 h-30 items-center justify-center'>
    {IconBody}
    <div className='spliter not-sm:hidden'></div>
    {ContentBody}
  </div>
}