import { useState } from 'react';
import SwipeToast from '@/components/ReactBits/SwipeToast'; // عدل المسار حسب مكان الكومبوننت عندك

export default function DonateRow({ name, link, icon, isCopy }: { name: string; link: string; icon: string; isCopy?: boolean }) {
    const [showToast, setShowToast] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isCopy) {
            e.preventDefault();
            navigator.clipboard.writeText(link);
            setShowToast(true);
        }
    };

    return (
        <>
            <a 
                href={isCopy ? "#" : link} 
                onClick={handleClick}
                className="flex backgroundGradient gap-3 w-3xs items-center justify-start rounded-lg p-2 text-wrap cursor-pointer" 
                target={isCopy ? "_self" : "_blank"} 
                rel="noopener noreferrer"
            >
                <img src={icon} alt={name} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex flex-col gap-1 glowText items-start justify-start w-full overflow-hidden text-ellipsis whitespace-nowrap text-white-500">
                    <span className="font-bold">{name}</span>
                </div>
            </a>

            {/* الـ Toast الخاص بالنسخ */}
            {isCopy && (
                <div className="fixed bottom-5 left-5 z-50">
                    <SwipeToast
                        open={showToast}
                        onClose={() => setShowToast(false)}
                        title="Copied!"
                        description={`${name} copied to clipboard`}
                        duration={2500}
                        background="#000000ee"
                        color="#fff"
                        fuseColor="rgba(170, 59, 255, 0.5)"
                        width={320}
                        radius={12}
                        fuse="bottom"
                    />
                </div>
            )}
        </>
    );
}