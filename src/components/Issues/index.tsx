import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Loader, Tabs, Typography, Variant } from 'components/uiKit';
import Logo from 'assets/images/logo.png';
import RepoStore from 'store/repositories';
import { AppDispatch } from 'store';

import { IssueList } from './IssueList';
import css from './style.module.css';

export enum SECTIONS {
  all = 'all',
  open = 'open',
  closed = 'closed',
}

export const Issues: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { id } = params;
  const repository = useSelector(RepoStore.selectors.getCurrentRepoId(Number(id)));
  const issues = useSelector(RepoStore.selectors.getIssues);
  const openIssues = useSelector(RepoStore.selectors.getOpenIssues);
  const closedIssues = useSelector(RepoStore.selectors.getClosedIssues);
  const isLoadingIssues = useSelector(RepoStore.selectors.getIsIssuesLoading);
  const isLoadedIssues = useSelector(RepoStore.selectors.getIsLoadedIssues);
  const error = useSelector(RepoStore.selectors.getErrorIssues);
  const sectionValues = Object.values(SECTIONS);
  const [tab, setTab] = useState(sectionValues[0]);
  const [currentPage, setPage] = useState<number>(NaN);

  const loadIssues = useCallback(async () => {
    if (!repository) return;
    await dispatch(
      RepoStore.actions.loadIssueList({
        owner: repository.owner.login,
        repoName: repository.name,
        page: currentPage,
      }),
    );
    setPage((prev) => prev + 1);
  }, [currentPage, repository, issues]);

  useEffect(() => {
    if (repository) {
      loadIssues();
    } else {
      navigate('../', { replace: true });
    }
  }, [repository]);

  const goBack = () => {
    dispatch(RepoStore.actions.setIssues([]));
    navigate('../', { replace: true });
  };

  const currentList = useMemo(() => {
    switch (tab) {
      case SECTIONS.open:
        return openIssues;
      case SECTIONS.closed:
        return closedIssues;
      default:
        return issues;
    }
  }, [tab, openIssues, closedIssues, issues]);

  const renderIssues = () => {
    if (!isLoadingIssues && ((!isLoadedIssues && issues.length) || error)) {
      const text = error || 'There is no issue';
      return (
        <Typography className={css.warning} variant={Variant.h5} align="center">
          {text}
        </Typography>
      );
    }
    const tabs = sectionValues.map((item) => ({
      label: item.toUpperCase(),
      value: item,
      current: tab === item,
    }));
    return (
      <>
        <div className={css.tabs}>
          <Tabs<SECTIONS> tabs={tabs} setTab={setTab} />
        </div>
        <IssueList
          loading={isLoadingIssues}
          tab={tab}
          closedCount={closedIssues.length}
          openCount={openIssues.length}
          currentList={currentList}
        />
      </>
    );
  };

  if (isLoadingIssues || (!isLoadedIssues && !error)) return <Loader />;

  return (
    <div>
      <div className={css.title}>
        <img src={Logo} alt="logo" className={css.logo} />
        <Typography variant={Variant.h4}>Issues</Typography>
      </div>
      <button type="button" data-testid="go_back_btn" onClick={goBack} className={css.backBtn}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={css.backIcon}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.81731 12.7492L11.0289 16.939L9.97105 18.0024L4.47105 12.531C4.32955 12.3902 4.25 12.1989 4.25 11.9993C4.25 11.7997 4.32955 11.6083 4.47105 11.4676L9.97105 5.99609L11.0289 7.05951L6.81737 11.2492L20 11.2492L20 12.7492L6.81731 12.7492Z"
          />
        </svg>
        Go back
      </button>
      {renderIssues()}
      {!isLoadingIssues && !!currentList.length && (
        <footer className={css.footer}>
          <Button onClick={loadIssues}>Load more</Button>
        </footer>
      )}
    </div>
  );
};
