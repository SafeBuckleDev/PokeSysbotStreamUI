"use client";

import { useEffect, useRef, useState } from "react";

export interface TradeUpdate {
  pokedexNum: number;
  pokemonName: string;
  isShiny: boolean;
  queueCount: number;
}

export function useTradeSocket() {
  const lastTrade = useRef<TradeUpdate | null>(null);
  const [, forceRender] = useState(0);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5001");

    ws.onmessage = (event) => {
      try {
        const parsed = JSON.parse(event.data);

        // Only update if we have actual trade data
        if (parsed?.pokedexNum && parsed?.pokemonName != null) {
          lastTrade.current = parsed;
          forceRender((v) => v + 1); // trigger re-render
        }
        // else: ignore "searching" or empty messages
      } catch (err) {
        console.error("Failed to parse WS message", err);
      }
    };

    ws.onerror = () => ws.close();
    return () => ws.close();
  }, []);

  return lastTrade.current;
}
