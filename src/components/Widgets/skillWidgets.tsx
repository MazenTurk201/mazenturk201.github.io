import { useMemo, } from "react";
import { RadixProgressDemo } from "@/components/Widgets/progressWidgets";




export default function skill({ title, tags, icon, percent, color, ImgStyle }: { title: string, tags: string[], icon: string, percent: number, color: string, ImgStyle?: string }) {
  const randomDelay = useMemo(() => `${Math.random() * 3}s`, []);
  let IconBody = <div>
    <img src={icon} alt={title as string} className={`w-30 md:w-20 h-auto flex-1 glow zoomAnim ${ImgStyle ?? ""}`} style={{ animationDelay: randomDelay }} />
  </div>
  let ContentBody = <div className='flex flex-col justify-center items-center gap-3 w-full'>
    {title}
    <div className="w-full overflow-x-auto">
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
  return <div className='flex flex-col md:flex-row gap-5 h-90 md:h-30 items-center justify-center w-full'>
    {IconBody}
    <div className='spliter not-sm:hidden'></div>
    {ContentBody}
    <svg className="absolute left-[0.15em] right-[0.15em] bottom-0" height="20" viewBox="0 0 200 20" preserveAspectRatio="none" fill="none" style={{width: 'calc(100% - 0.3em)'}}><path d="M2 14 Q 30 4 60 12 T 120 10 T 198 14" stroke="url(#scribbleGrad)" stroke-width="4" stroke-linecap="round" fill="none"></path><defs><linearGradient id="scribbleGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#A855F7"></stop><stop offset="100%" stop-color="#190143"></stop></linearGradient></defs></svg>
  </div>
}