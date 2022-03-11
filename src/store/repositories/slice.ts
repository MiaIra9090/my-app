import { createSlice } from '@reduxjs/toolkit';

import * as T from './types';
import * as AC from './actions';

const initialState: T.State = {
  repositories: [],
  issues: [],
  totalCount: NaN,
  emogies: {},
  page: 1,
  searchParam: '',
};

export const slice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    setPage: (state, action) => {
      return {
        ...state,
        page: action.payload,
      };
    },
    setSearchParam: (state, action) => {
      return {
        ...state,
        searchParam: action.payload,
      };
    },
    setIssues: (state, action) => {
      return {
        ...state,
        issues: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AC.loadRepositories.fulfilled, (state, action) => {
      const { repositories, totalCount } = action.payload;
      state.repositories = repositories;
      state.totalCount = totalCount;
    });
    builder.addCase(AC.loadIssueList.fulfilled, (state, action) => {
      const { issues } = action.payload;
      state.issues = issues;
    });
    builder.addCase(AC.loadEmogies.fulfilled, (state, action) => {
      const { emogies } = action.payload;
      state.emogies = emogies;
    });
  },
});
