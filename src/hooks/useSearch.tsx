"use client";
import useSWR from "swr";
import { API_SERVICE_URL } from "@/app/constants/url";
import { fetcher } from "@/utils/swr";

const SEARCH_API_URL = API_SERVICE_URL + "/api/v1/search";

export default function useSearch(searchValue: string) {
  const { data, error, isLoading } = useSWR(
    searchValue.trim() ? `${SEARCH_API_URL}?q=${searchValue}` : null,
    fetcher
  );

  return {
    result: data,
    isLoading,
    isError: error,
  };
}
