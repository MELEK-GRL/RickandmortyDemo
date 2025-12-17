export type CharacterStatus = 'alive' | 'dead' | 'unknown';
export type CharacterGender = 'female' | 'male' | 'genderless' | 'unknown';

export type GetCharactersParams = {
    status?: CharacterStatus;
    gender?: CharacterGender;
};

export type ApiInfo = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
};

export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
};

export type CharacterListResponse = {
    info: ApiInfo;
    results: Character[];
};
