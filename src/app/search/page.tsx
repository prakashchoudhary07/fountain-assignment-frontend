"use client";

import { useState } from "react";
import List from "@/components/list";
import InputLabel from "@/components/input-label";
import useSearch from "@/hooks/useSearch";
import useDebounce from "@/hooks/useDebounce";
import useProfile from "@/hooks/useProfile";
import { redirect } from "next/navigation";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const { isError, isLoading, result } = useSearch(debouncedSearchValue);
  const { isError: authError } = useProfile();

  if (authError) {
    redirect("/login");
  }

  let renderResults;

  if (isLoading) {
    renderResults = <div className="p-2">Loading...</div>;
  }

  if (isError) {
    renderResults = isError.message;
  }

  if (result) {
    renderResults = <List list={result} />;
  }

  return (
    <main className="flex min-h-screen flex-col p-12">
      <h1 className="font-mono text-lg px-4 items-center">
        Fountain frontend assignment&nbsp;
      </h1>
      <div className="p-2">
        <div>
          <InputLabel
            id="search"
            name="search"
            label="Spotify search tracks:"
            inputValue={searchValue}
            setInputValue={setSearchValue}
          />
          {renderResults}
        </div>
      </div>
    </main>
  );
}
