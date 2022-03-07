import React, { useMemo, useState } from "react";
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Loader,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Variant,
  Description,
} from "components/uiKit";
import useModal from "hooks/useModal";
import { RepositoryCard } from "components/RepositoryCard";
import useLoadInfo from "hooks/useLoadInfo";

import { useRepositoriesInfo } from "../../context";

import css from "./style.module.css";

interface Props {
  emogies: Record<string, string>;
}

export const RepositoryList: React.FC<Props> = ({ emogies }) => {
  const {
    repositoryList,
    error,
    searched,
    loadingRepositories,
    searchParams,
    page,
    totalCount,
  } = useRepositoriesInfo();
  const { searchRepository } = useLoadInfo();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
  const openMenu = Boolean(anchorEl);
  const [selectedRepositoryId, setSelected] = useState(NaN);
  const { isOpen, close, open } = useModal();

  const handleClick = (event: React.MouseEvent, id: number) => {
    setAnchorEl(event.currentTarget);
    setSelected(id);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = async () => {
    searchRepository(searchParams, page + 1);
  };

  const warningText = useMemo(() => {
    if (!searched) return "Please, type repository name";
    if (error) return error;
    if (!repositoryList.length) return "Not found";
    return "";
  }, [repositoryList.length, error, searched]);

  if (warningText && !loadingRepositories) {
    return (
      <Typography variant={Variant.h6} align="center">
        {warningText}
      </Typography>
    );
  }

  const goToIssues = () => {
    navigate(`../issues/${selectedRepositoryId}`, { replace: true });
  }

  return (
    <div className={css.wrapper}>
      {loadingRepositories && <Loader />}
      <section className={css.cardWrapper}>
        {isOpen && selectedRepositoryId && (
          <RepositoryCard id={selectedRepositoryId} close={close} emogies={emogies} />
        )}
        {repositoryList.map((repository) => {
          return (
            <Card key={repository.id} className={css.card}>
              <div>
                <CardHeader
                  avatar={
                    <img
                      src={repository.owner?.avatar_url}
                      alt="avatar"
                      className={css.avatar}
                    />
                  }
                  title={repository.name}
                  className={css.cardHeader}
                />
                <CardContent>
                  <Description text={repository.description} emogies={emogies} />
                </CardContent>
              </div>
              <CardActions className={css.actions}>
                <div>
                  <IconButton
                    onClick={(ev) => handleClick(ev, repository.id)}
                    size="small"
                  >
                    <div className={css.dots}>
                      <div className={css.dot}></div>
                      <div className={css.dot}></div>
                      <div className={css.dot}></div>
                    </div>
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    id="menu"
                    open={openMenu}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 5px rgba(0,0,0,0.03))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={open}>More details</MenuItem>
                    <MenuItem onClick={goToIssues}>Issues</MenuItem>
                  </Menu>
                </div>
              </CardActions>
            </Card>
          );
        })}
      </section>
      {!loadingRepositories && repositoryList.length < totalCount && (
        <footer className={css.footer}>
          <Button onClick={handleSearch}>Load more</Button>
        </footer>
      )}
    </div>
  );
};
