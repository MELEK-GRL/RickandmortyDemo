import { create } from 'zustand';

type CharacterStore = {
    selectedCharacterId: number | null;
    selectCharacter: (id: number) => void;
    clearSelectedCharacter: () => void;
};

export const useCharacterStore = create<CharacterStore>((set) => ({
    selectedCharacterId: null,
    selectCharacter: (id) => set({ selectedCharacterId: id }),
    clearSelectedCharacter: () => set({ selectedCharacterId: null }),
}));
