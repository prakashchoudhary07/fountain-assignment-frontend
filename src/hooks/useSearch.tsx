import useSWR from "swr";

const SEARCH_API_URL = "http://localhost:3001/api/v1/search";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useSearch(searchValue: string) {
  const { data, error, isLoading } = useSWR(
    searchValue ? `${SEARCH_API_URL}?q=${searchValue}` : null,
    fetcher
  );

  return {
    result: data,
    isLoading,
    isError: error,
  };
}
