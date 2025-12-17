'use client';

import type { Character } from '@/server/api/rickandMortyApi/types';
import { useCharacterStore } from '@/store/useCharacterStore';

type CardProps = {
    character: Character;
};

export default function Card({ character }: CardProps) {
    const selectCharacter = useCharacterStore((s) => s.selectCharacter);

    return (
        <div
            onClick={() => selectCharacter(character.id)}
            className={
                'flex cursor-pointer flex-row items-center gap-4 rounded-md border px-3 py-3 shadow-md transition-shadow hover:shadow-lg'
            }
        >
            <div className="h-[110px] w-[80px] rounded-md bg-red-300">
                <img
                    src={character.image}
                    alt={character.name}
                    className="h-full w-full rounded-md object-cover"
                />
            </div>

            <div className="flex-col gap-2">
                <h3 className="line-clamp-2 text-sm font-medium">{character.name}</h3>

                <p className="line-clamp-1 text-xs text-zinc-600 dark:text-zinc-400">
                    {character.status} • {character.gender}
                </p>
            </div>
        </div>
    );
}
