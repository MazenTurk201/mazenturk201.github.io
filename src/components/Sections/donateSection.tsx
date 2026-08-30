import { donateLinks } from "@/components/Data/globalData";
import DonateRow from "@/components/Widgets/rowDonateWidgets";
export default function DonateSection() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-start place-content-center m-5">
            {donateLinks.map((media, index) => (
                <div key={index}>
                    <DonateRow name={media.name} link={media.link} icon={media.icon} />
                </div>
            ))}
        </div>
    );
}