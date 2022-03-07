import React, { useCallback, useMemo, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Button, Loader, Tabs, Typography, Variant } from "components/uiKit";
import Logo from "assets/images/logo.png";
import { Issue, getIssuesList } from "providers/repositoriesProvider";

import { useCurrentRepo } from "../../context";

import { IssueList } from "./IssueList";
import css from "./style.module.css";

export enum SECTIONS {
  all = "all",
  open = "open",
  closed = "closed",
}

export const Issues: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const repository = useCurrentRepo(Number(id));
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const sectionValues = Object.values(SECTIONS);
  const [tab, setTab] = useState(sectionValues[0]);
  const [currentPage, setPage] = useState<number>(NaN);

  const loadIssues = useCallback(async () => {
    if (!repository) return;
    const res = await getIssuesList(
      repository.owner.login,
      repository.name,
      currentPage
    );
    setPage((prev) => prev + 1);
    setLoading(false);
    if (res.issues) {
      setIssues((prev) => [...prev, ...res.issues]);
    }
    if (res.error) setError(res.error);
  }, [currentPage, repository]);

  useEffect(() => {
    if (repository) {
      loadIssues();
    } else {
      if (!repository) navigate("../", { replace: true });
    }
  }, [repository]);

  const goBack = () => {
    navigate("../", { replace: true });
  };

  const openIssues = useMemo(() => {
    return issues.filter((issue) => issue.state === "open");
  }, [issues]);

  const closedIssues = useMemo(() => {
    return issues.filter((issue) => issue.state === "closed");
  }, [issues]);

  const currentList = useMemo(() => {
    switch (tab) {
      case SECTIONS.open:
        return openIssues;
      case SECTIONS.closed:
        return closedIssues;
      default:
        return issues;
    }
  }, [tab, issues, openIssues, closedIssues]);

  const renderIssues = () => {
    if (!loading && (!issues.length || error)) {
      const text = error ? error : "There is no issue";
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
          loading={loading}
          tab={tab}
          closedCount={closedIssues.length}
          openCount={openIssues.length}
          currentList={currentList}
        />
      </>
    );
  };

  if (loading) return <Loader />;

  return (
    <div>
      <div className={css.title}>
        <img src={Logo} alt="logo" className={css.logo} />
        <Typography variant={Variant.h4}>Issues</Typography>
      </div>
      <button type="button" onClick={goBack} className={css.backBtn}>
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
      {!loading && !!issues.length && (
        <footer className={css.footer}>
          <Button onClick={loadIssues}>Load more</Button>
        </footer>
      )}
    </div>
  );
};
