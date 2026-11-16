import { servicesData } from "@/components/Data/globalData";

export default function Services() {
    return (
        <>
            <main className="flex flex-1 h-full w-full flex-col items-center justify-center bg-white dark:bg-black">
                <h1 className="text-4xl font-bold text-black dark:text-zinc-50 my-8">
                    خدماتنا
                </h1>
                <div className="flex flex-col items-center justify-center w-full"></div>
                    {servicesData.map((category, index) => (
                        <div key={index} className="w-full max-w-5xl p-4">
                            <details key={index} className="bg-(--accent-bg) p-4 rounded-lg">
                            <summary dir="rtl" className="text-white my-2.5 select-none cursor-pointer">{category.categoryName}</summary>
                            <div className="flex flex-col gap-4 text-zinc-200">
                                {category.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="bg-(--accent-bg) p-4 rounded-lg">
                                        <h3>{item.name}</h3>
                                        <p>السعر: ${item.price.toFixed(2)}ج</p>
                                        {item.subOptions && (
                                            <div className="flex flex-col gap-2 mt-2">
                                                {item.subOptions.map((subOption, subIndex) => (
                                                    <div key={subIndex} className="bg-(--accent-bg) p-2 rounded">
                                                        <p>{subOption.name}</p>
                                                        <p>السعر: {subOption.price.toFixed(2)}ج</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            </details>
                        </div>
                    ))}
            </main>
        </>
    )
}