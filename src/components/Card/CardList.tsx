'use client';

import type { Character } from '@/server/api/rickandMortyApi/types';

import Card from './Card';

type CardListProps = {
    characters: Character[];
};

export default function CardList({ characters }: CardListProps) {
    if (characters.length === 0) {
        return <p className="mt-6 text-sm">No characters found.</p>;
    }

    return (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {characters.map((character) => (
                <Card key={character.id} character={character} />
            ))}
        </div>
    );
}
