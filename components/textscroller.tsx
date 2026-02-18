import glossary from "@/glossary";
import { ShinyIcon } from "@/public/icons/shiny";

export function TextScroller() {
    return (
        <div className="w-359 h-16 font-bold items-center text-3xl text-nowrap overflow-hidden text-foreground bg-background-accent px-4 rounded-2xl shadow-xl relative">
            <div className="w-full h-full flex flex-row gap-16 items-center overflow-hidden rounded-lg relative" >
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="px-16 scroll-item flex flex-row gap-2 items-center">
                        <p>{glossary.general.streaminfo}</p>
                    </div>
                ))}
            </div>

            <div className="absolute h-full w-1/16 left-4 top-0 bg-gradient-to-r from-background-accent to-transparent"></div>
            <div className="absolute h-full w-1/16 right-4 top-0 bg-gradient-to-l from-background-accent to-transparent"></div>
        </div>
    );
}