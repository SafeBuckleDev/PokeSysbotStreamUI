"use client";

import GameOverlay from "@/components/gameoverlay";
import OrderDisplayer from "@/components/orderDisplayer";
import { TextScroller } from "@/components/textscroller";
import { useTradeSocket } from "@/hooks/useTradeSocket";

export default function Home() {
  const trade = useTradeSocket();

  return (
    <div className="w-full p-12 aspect-video bg-background flex flex-row gap-8">
      <div className="flex flex-col gap-8">
        <GameOverlay />
        <TextScroller />
      </div>

      {trade && (
        <OrderDisplayer
          pokedexNumber={trade.pokedexNum}
          pokemonName={trade.pokemonName}
          isShiny={trade.isShiny}
          queueCount={trade.queueCount}
        />
      )}
    </div>
  );
}
