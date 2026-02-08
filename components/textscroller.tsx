import glossary from "@/glossary";

export function TextScroller() {
    return (
        <div className="w-359 h-16 font-bold items-center text-3xl text-nowrap overflow-hidden text-foreground bg-background-accent px-4 rounded-2xl shadow-xl relative">
            <div className="w-full h-full flex flex-row gap-16 items-center overflow-hidden rounded-lg relative" >
                <p className="px-16 scroll-item">{glossary.general.streaminfo}</p>
                <p className="px-16 scroll-item">{glossary.general.streaminfo}</p>
                <p className="px-16 scroll-item">{glossary.general.streaminfo}</p>
            </div>

            <div className="absolute h-full w-1/8 left-0 top-0 bg-gradient-to-r from-background-accent to-transparent"></div>
            <div className="absolute h-full w-1/8 right-0 top-0 bg-gradient-to-l from-background-accent to-transparent"></div>
        </div>
    );
}