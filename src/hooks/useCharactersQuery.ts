import { useQuery } from '@tanstack/react-query';

import { getCharacters } from '@/server/api/rickandMortyApi/getApi';
import type {
    CharacterListResponse,
    GetCharactersParams,
} from '@/server/api/rickandMortyApi/types';

export const charactersQueryKey = (params: GetCharactersParams) =>
    ['characters', params.status ?? null, params.gender ?? null] as const;

export function useCharactersQuery(params: GetCharactersParams) {
    return useQuery<CharacterListResponse>({
        queryKey: charactersQueryKey(params),
        queryFn: () => getCharacters(params),
    });
}
