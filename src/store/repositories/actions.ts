import { createAsyncThunk } from '@reduxjs/toolkit';

import RepositoryStore from 'store/repositories';
import * as RepositoryProvider from 'providers/repositoriesProvider';
import { RootState } from 'store';

import { Issue, Repository } from './types';
import * as AT from './actionTypes';

interface RequestData {
  querySearch: string;
  page?: number;
  per_page?: number;
}

export const loadRepositories = createAsyncThunk(
  AT.LOAD_REPOSITORIES,
  async (data: RequestData, { rejectWithValue, getState, dispatch }) => {
    dispatch(RepositoryStore.actions.setSearchParam(data.querySearch));
    const result = await RepositoryProvider.getRepositoriesList(
      data.querySearch,
      data.page,
      data.per_page,
    );
    if (result.error) {
      return rejectWithValue(result.error);
    }

    const currentRepoList: Repository[] = RepositoryStore.selectors.getRepositories(
      getState() as RootState,
    );
    dispatch(RepositoryStore.actions.setPage(data.page));

    return {
      repositories:
        data.page === 1 ? result.repositories : [...currentRepoList, ...result.repositories],
      totalCount: result.totalCount,
    };
  },
);

interface IssuesRequest {
  owner: string;
  repoName: string;
  page?: number;
}

export const loadIssueList = createAsyncThunk(
  AT.LOAD_ISSUES,
  async (data: IssuesRequest, { rejectWithValue, getState }) => {
    const result = await RepositoryProvider.getIssuesList(data.owner, data.repoName, data.page);
    if (result.error || !result.issues) {
      return rejectWithValue(result.error);
    }

    const currentIssuesList: Issue[] = RepositoryStore.selectors.getIssues(getState() as RootState);

    return {
      issues: [...currentIssuesList, ...result.issues],
    };
  },
);

export const loadEmogies = createAsyncThunk(AT.LOAD_EMOGIES, async (_, { rejectWithValue }) => {
  const result = await RepositoryProvider.getEmogies();
  if (result.error || !result.emogies) {
    return rejectWithValue(result.error);
  }
  return {
    emogies: result.emogies,
  };
});
