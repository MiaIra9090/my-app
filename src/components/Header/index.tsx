import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, Input, Typography, Variant } from 'components/uiKit';
import Logo from 'assets/images/logo.png';
import useLoadInfo from 'hooks/useLoadInfo';
import RepoStore from 'store/repositories';

import css from './style.module.css';

export const Header: React.FC = () => {
  const searchParam = useSelector(RepoStore.selectors.getSearchParam);
  const [searchParams, setSearchParams] = useState(searchParam);
  const { searchRepository } = useLoadInfo();

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(ev.target.value);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    searchRepository(searchParams, 1);
  };

  return (
    <header className={css.header}>
      <div className={css.title}>
        <img src={Logo} alt="logo" className={css.logo} />
        <Typography variant={Variant.h4}>GitHub repository search</Typography>
      </div>
      <form onSubmit={handleSearch} className={css.form}>
        <Input
          value={searchParams}
          placeholder="Repository search"
          name="search_repository"
          onChange={handleChange}
        />
        <Button type="submit" disabled={!searchParams}>
          Search
        </Button>
      </form>
    </header>
  );
};
