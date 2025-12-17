"use client";

import Filter from "@/components/Filters/Filter";
import CardList from "@/components/Card/CardList";
import Loading from "@/components/Loading/Loading";
import { useCharactersQuery } from "@/hooks/useCharactersQuery";
import { parseAsString, useQueryState } from "nuqs";
import type {
  CharacterGender,
  CharacterStatus,
} from "@/server/api/rickandMortyApi/types";

const isStatus = (v: string | null): v is CharacterStatus =>
  v === "alive" || v === "dead" || v === "unknown";

const isGender = (v: string | null): v is CharacterGender =>
  v === "female" || v === "male" || v === "genderless" || v === "unknown";

export default function Home() {
  const [statusRaw] = useQueryState("status", parseAsString);
  const [genderRaw] = useQueryState("gender", parseAsString);

  const status = isStatus(statusRaw) ? statusRaw : undefined;
  const gender = isGender(genderRaw) ? genderRaw : undefined;

  const { data, isLoading, isError } = useCharactersQuery({
    status,
    gender,
  });

  return (
    <main className="min-h-screen ">
      <div className="flex flex-col w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-10 pb-5">
        <div className="flex justify-center pb-5">
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
            Rick & Morty Karakterler
          </h1>
        </div>
        <Filter />

        {isLoading && <Loading />}
        {isError && <p className="mt-6 text-sm">Something went wrong.</p>}
        {data && <CardList characters={data.results} />}
      </div>
    </main>
  );
}
