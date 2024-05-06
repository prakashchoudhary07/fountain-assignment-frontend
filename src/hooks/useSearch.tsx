import useSWR from "swr";

const SEARCH_API_URL = "http://localhost:3001/api/v1/search";

const fetcher = async (url: string) => {
  const res = await fetch(url, { credentials: "include" });

  if (!res.ok) {
    const { message } = await res.json();
    const error = new Error(
      "An error occurred while fetching the data." + " " + message
    );
    throw error;
  }
  const { data } = await res.json();
  return data;
};

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
