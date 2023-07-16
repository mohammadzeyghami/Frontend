// methods we can use api with that in swr

const { data, error, isLoading, isValidating, mutate } = useSWR(
  key,
  fetcher,
  options
);

// data: data for the given key resolved by fetcher (or undefined if not loaded)
// error: error thrown by fetcher (or undefined)
// isLoading: if there's an ongoing request and no "loaded data". Fallback data and previous data are not considered "loaded data"
// isValidating: if there's a request or revalidation loading
// mutate(data?, options?): function to mutate the cached data (details)
