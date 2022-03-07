import * as Provider from "providers/repositoriesProvider";

import { useRepositoriesInfo } from "../context";

const DEFAULT_PER_PAGE = 9;

export default function useLoadInfo() {
  const {
    setList,
    setSearchError,
    error,
    setSearched,
    setLoading,
    setPage,
    repositoryList,
    setTotalCount,
  } = useRepositoriesInfo();

  const searchRepository = async (searchParams: string, page: number) => {
    setSearched(true);
    setLoading(true);
    const result = await Provider.getRepositoriesList(
      searchParams,
      page,
      DEFAULT_PER_PAGE
    );
    if (result.repositories) {
      if (page === 1) {
        setList(result.repositories)
      } else {
        setList([...repositoryList, ...result.repositories]);
      }
      setTotalCount(result.totalCount);
      if (error) setSearchError("");
      setPage(page);
    }
    if (result.error) setSearchError(result.error);
    setLoading(false);
  };

  return { searchRepository };
}
