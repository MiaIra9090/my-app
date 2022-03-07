import React, { useEffect, useState } from "react";

import { getEmogies } from "providers/repositoriesProvider";
import { Header } from "components/Header";
import { RepositoryList } from "components/RepositoryList";

export const Content: React.FC = () => {
  const [emogies, setEmogies] = useState({});

  const getEmogiesList = async () => {
    const res = await getEmogies();
    if (res.emogies) {
        setEmogies(res.emogies);
    }
  };

  useEffect(() => {
    getEmogiesList();
  }, []);

  return (
    <>
      <Header />
      <RepositoryList emogies={emogies} />
    </>
  );
};
