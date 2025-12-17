import type { CharacterListResponse, GetCharactersParams } from './types';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export async function getCharacters(params: GetCharactersParams = {}) {
    const url = new URL(BASE_URL);

    if (params.status) url.searchParams.set('status', params.status);
    if (params.gender) url.searchParams.set('gender', params.gender);

    const res = await fetch(url.toString(), {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('error');
    }

    const data = (await res.json()) as CharacterListResponse;
    return data;
}
