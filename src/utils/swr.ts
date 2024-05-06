export const fetcher = async (url: string) => {
  const res = await fetch(url, { credentials: "include" });

  if (!res.ok) {
    const { message } = await res.json();
    const error = new Error(
      "An error occurred while fetching the data" + " " + message
    );
    throw error;
  }
  const { data } = await res.json();

  return data;
};
