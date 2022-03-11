import { createSelector } from '@reduxjs/toolkit';

import { getIsLoaded, getRequestError, getRequestLoading } from 'store/requestsReducer/selectors';
import { RootState } from 'store';

import { Issue, Repository } from './types';
import * as AT from './actionTypes';

const getReducer = (state: RootState) => state.repositories;
export const getRepositories = (state: RootState): Repository[] => getReducer(state).repositories;
export const getIssues = (state: RootState): Issue[] => getReducer(state).issues;
export const getTotalCount = (state: RootState): number => getReducer(state).totalCount;
export const getPage = (state: RootState): number => getReducer(state).page;
export const getSearchParam = (state: RootState): string => getReducer(state).searchParam;
export const getIsRepoLoading = getRequestLoading(AT.LOAD_REPOSITORIES);
export const getIsIssuesLoading = getRequestLoading(AT.LOAD_ISSUES);
export const getIsLoadedRepos = getIsLoaded(AT.LOAD_REPOSITORIES);
export const getIsLoadedIssues = getIsLoaded(AT.LOAD_ISSUES);
export const getError = getRequestError(AT.LOAD_REPOSITORIES);
export const getErrorIssues = getRequestError(AT.LOAD_ISSUES);

export const getCurrentRepoId = (id: number) =>
  createSelector(getRepositories, (repositories) => repositories.find((item) => item.id === id));
