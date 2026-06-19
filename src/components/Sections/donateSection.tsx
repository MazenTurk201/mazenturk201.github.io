import { donateLinks } from "@/components/Data/globalData";
import DonateRow from "@/components/Widgets/rowDonateWidgets";
export default function DonateSection() {
    return (
        <div className="flex flex-col gap-3 not-sm:grid not-sm:grid-cols-6 items-start place-content-center">
            {donateLinks.map((media, index) => (
                <div key={index}>
                    <DonateRow name={media.name} link={media.link} icon={media.icon} />
                </div>
            ))}
        </div>
    );
}