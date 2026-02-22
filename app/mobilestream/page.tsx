'use client';

import GameOverlay from "@/components/gameoverlay";
import OrderDisplayer from "@/components/orderDisplayer";
import { TextScroller } from "@/components/textscroller";
import glossary from "@/glossary";

import { useTradeSocket } from "@/hooks/useTradeSocket";

export default function MobilePage(){
    const trade = useTradeSocket();
    const formattedName = trade?.pokemonName.replace(/\s+/g, "-").toLowerCase() || "";

    return (
        <div className="w-full h-screen bg-background flex flex-col gap-8">
            <div className="w-full pb-4 bg-background-accent shadow-2xl">
                <div className="w-full aspect-video bg-foreground" />
            </div>

            {trade && <div className="w-full bg-background-accent p-4 py-16 rounded-2xl shadow-2xl flex flex-col gap-6">
                <img 
                    src={`https://raw.githubusercontent.com/hexbyt3/sprites/refs/heads/main/${trade.isShiny ? "Shiny" : "Non-Shiny"}/${formattedName}.png`} 
                    alt={trade.pokemonName} 
                    className="w-full px-30"
                />

                <div className="text-center font-bold">
                    <p className="text-4xl">{glossary.orderDisplayer.title}</p>
                    <h2 className="text-9xl">{trade.pokemonName}{trade.isShiny ? "✨" : ""}</h2>
                </div>
            </div>}
        </div>
    );
}