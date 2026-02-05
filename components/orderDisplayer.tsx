import glossary from "@/glossary";

export interface orderInfo {
    pokedexNumber: number;
    pokemonName: string;
    isShiny: boolean;
    queueCount: number;
}

export default function OrderDisplayer({ pokedexNumber, pokemonName, isShiny, queueCount }: orderInfo) {
    return (
        <div className="w-full h-230 bg-background-accent rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center gap-4">
            <img src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${pokedexNumber}.png`} alt={pokemonName} className="w-full" />
            <div className="text-center font-bold">
                <p className="text-xl">{glossary.orderDisplayer.title}</p>
                <h2 className="text-4xl">{pokemonName}{isShiny ? "✨" : ""}</h2>
            </div>
            {queueCount > 0 && (
                <div className="text-xl font-bold">
                    <p>{glossary.orderDisplayer.queue} {queueCount}</p>
                </div>
            )}
        </div>
    );
}