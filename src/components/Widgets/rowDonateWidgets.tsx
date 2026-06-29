export default function DonateRow({ name, link, icon, isCopy }: { name: string; link: string; icon: string; isCopy?: boolean }) {
    if (isCopy) {
        return (
            <div className="flex backgroundGradient gap-3 w-3xs items-center justify-start rounded-lg p-2 text-wrap" onClick={() => navigator.clipboard.writeText(link)}>
                <img src={icon} alt={name} className="w-25 h-25 rounded-full" />
                <div className="flex flex-col gap-1 glowText items-start justify-start w-full overflow-hidden text-ellipsis whitespace-nowrap text-white-500">
                    {name}
                </div>
            </div>
        );
    } else {
        return (
            <a href={link} className="flex backgroundGradient gap-3 w-3xs items-center justify-start rounded-lg p-2 text-wrap" target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={name} className="w-25 h-25 rounded-full" />
                <div className="flex flex-col gap-1 glowText items-start justify-start w-full overflow-hidden text-ellipsis whitespace-nowrap text-white-500">
                    {name}
                </div>
            </a>
        );
    }
}