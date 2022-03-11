import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export function searchRepositories(querySearch: string, page?: number, per_page?: number) {
  let url = `${BASE_URL}/search/repositories?q=${querySearch}`;
  if (page) url = `${url}&page=${page}`;
  if (per_page) url = `${url}&per_page=${per_page}`;
  return axios(url);
}

export function getIssues(owner: string, repoName: string, page?: number) {
  let url = `${BASE_URL}/repos/${owner}/${repoName}/issues?state=all`;
  if (page) url = `${url}&page=${page}`;
  return axios(url);
}

export function getEmogies() {
  return axios(`${BASE_URL}/emojis`);
}
