import { useDispatch } from 'react-redux';

import RepoStore from 'store/repositories';

const DEFAULT_PER_PAGE = 9;

export default function useLoadInfo() {
  const dispatch = useDispatch();

  const searchRepository = async (searchParams: string, page: number) => {
    dispatch(
      RepoStore.actions.loadRepositories({
        querySearch: searchParams,
        page,
        per_page: DEFAULT_PER_PAGE,
      }),
    );
  };

  return { searchRepository };
}
