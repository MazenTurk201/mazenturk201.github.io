import AnimatedBlurText from "@/components/animate-ui/animatedBlurText";
import { servicesData } from "@/components/Data/globalData";

export default function Services() {
    return (
        <>
            <main className="flex flex-1 h-full w-full flex-col items-center justify-center bg-white dark:bg-black">
                <h1>{AnimatedBlurText("Services", "top", 200)}</h1>
                <div className="flex flex-col items-center justify-center w-full"></div>
                    {servicesData.map((category, index) => (
                        <div key={index} className="w-full max-w-5xl p-4">
                            <h2>{category.categoryName}</h2>
                            <div className="flex flex-col gap-4">
                                {category.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                        <h3>{item.name}</h3>
                                        <p>Price: ${item.price.toFixed(2)}</p>
                                        {item.subOptions && (
                                            <div className="flex flex-col gap-2 mt-2">
                                                {item.subOptions.map((subOption, subIndex) => (
                                                    <div key={subIndex} className="bg-gray-200 dark:bg-gray-700 p-2 rounded">
                                                        <p>{subOption.name}</p>
                                                        <p>Price: ${subOption.price.toFixed(2)}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
            </main>
        </>
    )
}