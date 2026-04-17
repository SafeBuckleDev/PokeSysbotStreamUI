"use client";

import glossary from "@/glossary";
import { motion } from "framer-motion";

export interface orderInfo {
  pokedexNumber: number;
  pokemonName: string;
  isShiny: boolean;
  queueCount: number;
}

export default function OrderDisplayer({
  pokedexNumber,
  pokemonName,
  isShiny,
  queueCount,
}: orderInfo) {
  const formattedName = pokemonName.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="w-full h-230 bg-background-accent rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center">
        <div className="w-full aspect-square">
        <motion.img
            key={`${pokedexNumber}-${isShiny}`}
            src={`https://raw.githubusercontent.com/hexbyt3/sprites/refs/heads/main/${isShiny ? "Shiny" : "Non-Shiny"}/${formattedName}.png`}
            alt={pokemonName}
            className="w-full p-4"
            initial={{ scale: 0.9, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
            }}
        />
    </div>

      <div className="text-center font-bold">
        <p className="text-xl">{glossary.orderDisplayer.title}</p>
        <h2 className="text-[42px]">
          {pokemonName}
          {isShiny ? "✨" : ""}
        </h2>
      </div>

      {queueCount > 0 && (
        <div className="text-xl font-bold">
          <p>
            {glossary.orderDisplayer.queue} {queueCount}
          </p>
        </div>
      )}
    </div>
  );
}