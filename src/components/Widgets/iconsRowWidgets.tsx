import { mediaLinks } from "@/components/Data/globalData";
function iconsRow() {

    return (
        <div className="flex gap-3 not-sm:grid not-sm:grid-cols-6 items-center place-content-center">
            {mediaLinks.map((media, index) => (
                <a href={media.link} className="hoverIcons" target="_blank" rel="noopener noreferrer">
                    <i key={index} className={media.icon}></i>
                </a>
            ))}
        </div>
    );
}

export default iconsRow;