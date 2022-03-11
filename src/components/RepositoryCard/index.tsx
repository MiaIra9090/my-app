import React from 'react';
import { useSelector } from 'react-redux';

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CrossButton,
  Description,
  ForkIcon,
  IssueIcon,
  StarIcon,
  Typography,
  Variant,
} from 'components/uiKit';
import LinkIcon from 'assets/images/link.png';
import { formatDate } from 'utils/Date';
import RepoStore from 'store/repositories';

import css from './style.module.css';

interface Props {
  id: number;
  close: () => void;
  emogies: Record<string, string>;
}

export const RepositoryCard: React.FC<Props> = ({ id, close, emogies }) => {
  const repository = useSelector(RepoStore.selectors.getCurrentRepoId(Number(id)));

  if (!repository) return null;
  const updatedAt = formatDate(new Date(repository.updated_at));

  return (
    <div className={css.wrapper}>
      <div className={css.repository}>
        <CrossButton id={`${id}_close`} onClick={close} />
        <Card className={css.card}>
          <CardHeader
            avatar={<img src={repository.owner.avatar_url} alt="avatar" className={css.avatar} />}
            title={repository?.name}
            className={css.cardHeader}
          />
          <CardContent>
            {repository.description && (
              <>
                <Typography variant={Variant.caption}>Description:</Typography>
                <Description text={repository.description} emogies={emogies} />
              </>
            )}
            <div className={css.linkWrapper}>
              <img src={LinkIcon} alt="link" className={css.linkIcon} />
              <a
                rel="noreferrer"
                href={repository.svn_url}
                data-testid="insurance_link"
                target="_blank"
                className={css.link}
              >
                {repository.svn_url}
              </a>
            </div>
            <div className={css.info}>
              <Typography variant={Variant.caption}>Updated at:</Typography>
              <Typography variant={Variant.body1}>{updatedAt}</Typography>
            </div>
            {repository.language && (
              <div className={css.info}>
                <Typography variant={Variant.caption}>Language:</Typography>
                <Typography variant={Variant.body1} className={css.language}>
                  {repository.language}
                </Typography>
              </div>
            )}
          </CardContent>
          <CardActions className={css.actions}>
            <div className={css.action}>
              <ForkIcon className={css.icon} />
              <Typography variant={Variant.body2} className={css.label}>
                Fork
              </Typography>
              <Typography variant={Variant.body2} className={css.count}>
                {repository.forks_count}
              </Typography>
            </div>
            <div className={css.action}>
              <StarIcon className={css.icon} />
              <Typography variant={Variant.body2} className={css.label}>
                Star
              </Typography>
              <Typography variant={Variant.body2} className={css.count}>
                {repository.stargazers_count}
              </Typography>
            </div>
            <div className={css.action}>
              <IssueIcon className={css.icon} />
              <Typography variant={Variant.body2} className={css.label}>
                Issues
              </Typography>
              <Typography variant={Variant.body2} className={css.count}>
                {repository.open_issues_count}
              </Typography>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
