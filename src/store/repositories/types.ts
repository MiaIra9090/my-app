export interface State {
  repositories: Repository[];
  issues: Issue[];
  totalCount: number;
  emogies: Record<string, string>;
  page: number;
  searchParam: string;
}

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

export interface Issue {
  id: string;
  state: 'open' | 'closed';
  title: string;
  body?: string;
}
