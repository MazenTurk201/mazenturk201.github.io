export default function DonateRow({ name, link, icon }: { name: string; link: string; icon: string }) {
    return (
        <a href={link} className="flex gap-3 w-3xs items-center justify-start text-sm text-white-500 rounded-lg p-2 hover:bg-purple-800 bg-purple-900" target="_blank" rel="noopener noreferrer">
            <img src={icon} alt={name} className="w-25 h-25 rounded-full" />
            <div className="flex flex-col">
                {name}
            </div>
        </a>
    );
}