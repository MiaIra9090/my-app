import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Content } from "components";
import { Issues } from "components/Issues";

import "./App.css";
import { RepositoriesProvider, Repository } from "./context";

const App: React.FC = () => {
  const [repositoryList, setList] = useState<Repository[]>([]); // TODO typing
  const [error, setSearchError] = useState("");
  const [searchParams, setSearchParam] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [searched, setSearched] = useState(false);
  const [loadingRepositories, setLoading] = useState(false);
  return (
    <RepositoriesProvider
      value={{
        repositoryList,
        setList,
        error,
        setSearchError,
        searched,
        setSearched,
        setLoading,
        loadingRepositories,
        searchParams,
        setSearchParam,
        page,
        setPage,
        totalCount,
        setTotalCount,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="issues/:id" element={<Issues />} />
        </Routes>
      </BrowserRouter>
    </RepositoriesProvider>
  );
};

export default App;
