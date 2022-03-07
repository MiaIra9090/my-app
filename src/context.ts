import { createContext, useContext } from "react";

export interface Repository {
  owner: Owner;
  open_issues_count: number;
  svn_url: string;
  forks_count: number;
  stargazers_count: number;
  id: number;
  name: string;
  description?: string;
  updated_at: string;
  language?: string;
}

interface Owner {
  avatar_url: string;
  login: string;
}

export interface Value {
  repositoryList: Repository[];
  setList: (repositoryList: Repository[]) => void;
  setSearchError: (error: string) => void;
  error: string;
  searched: boolean;
  setSearched: (searched: boolean) => void;
  loadingRepositories: boolean;
  setLoading: (loadingRepositories: boolean) => void;
  searchParams: string;
  setSearchParam: (searchParams: string) => void;
  page: number;
  setPage: (page: number) => void;
  totalCount: number;
  setTotalCount: (totalCount: number) => void;
}

export const RepositoriesContext = createContext<Value>({
  repositoryList: [],
  setList: () => {},
  setSearchError: () => {},
  error: '',
  searched: false,
  setSearched: () => {},
  loadingRepositories: false,
  setLoading: () => {},
  searchParams: '',
  setSearchParam: () => {},
  page: 1,
  setPage: () => {},
  totalCount: 0,
  setTotalCount: () => {},
});

export function useRepositoriesInfo() {
  return useContext(RepositoriesContext);
}

export function useCurrentRepo(id: number) {
  return useRepositoriesInfo().repositoryList.find(item => item.id === id);
}

export const RepositoriesProvider = RepositoriesContext.Provider;
