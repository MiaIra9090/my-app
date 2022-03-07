import { AxiosError } from "axios";

import * as RepositoriesApi from "api/githubApi";
import { getErrorText } from "utils/Errors";

export interface Issue {
  id: string;
  state: "open" | "closed";
  title: string;
  body?: string;
}

export const getRepositoriesList = async (
  querySearch: string,
  page?: number,
  per_page?: number
) => {
  try {
    const res = await RepositoriesApi.searchRepositories(
      querySearch,
      page,
      per_page
    );
    return {
      repositories: res.data.items,
      totalCount: res.data.total_count,
    };
  } catch (err) {
    return {
      error: getErrorText(err as AxiosError<any>),
    };
  }
};

export const getIssuesList = async (
  owner: string,
  repoName: string,
  page?: number
) => {
  try {
    const res = await RepositoriesApi.getIssues(owner, repoName, page);
    return {
      issues: res.data as Issue[],
    };
  } catch (err) {
    return {
      error: getErrorText(err as AxiosError<any>),
    };
  }
};

export const getEmogies = async () => {
  try {
    const res = await RepositoriesApi.getEmogies();
    return {
      emogies: res.data as Record<string, string>,
    };
  } catch (err) {
    return {
      error: getErrorText(err as AxiosError<any>),
    };
  }
};
