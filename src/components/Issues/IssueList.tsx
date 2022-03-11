import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ArcElement, Chart, registerables } from 'chart.js';

import { Issue } from 'providers/repositoriesProvider';
import { Card, CardContent, CardHeader, Typography, Variant } from 'components/uiKit';

import { SECTIONS } from '.';

import css from './style.module.css';

interface Props {
  tab: SECTIONS;
  closedCount: number;
  openCount: number;
  loading: boolean;
  currentList: Issue[];
}

Chart.register(...registerables);
Chart.register(ArcElement);

export const IssueList: React.FC<Props> = ({
  tab,
  closedCount,
  openCount,
  loading,
  currentList,
}) => {
  const state = {
    labels: ['Open', 'Closed'],
    datasets: [
      {
        label: 'Open',
        backgroundColor: ['hsl(313, 73%, 46%)', 'hsl(180, 70%, 50%)'],
        hoverBackgroundColor: ['hsl(313, 73%, 36%)', 'hsl(180, 70%, 20%)'],
        data: [openCount, closedCount],
      },
    ],
  };

  if (!loading && !currentList.length) {
    return (
      <Typography variant={Variant.h5} className={css.warning} align="center">
        There is no issue
      </Typography>
    );
  }
  return (
    <section className={css.issuesWrapper}>
      <div className={css.cards}>
        {currentList.map((issue, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card testid={`issue_${issue.id}`} key={`${issue.id}_${index}`} className={css.card}>
            <div>
              <CardHeader title={`${index + 1}) ${issue.title}`} className={css.cardHeader} />
              <CardContent>
                <Typography variant={Variant.body2}>{issue.body || 'No description'}</Typography>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
      {tab === 'all' && (
        <div>
          <Pie data={state} />
        </div>
      )}
    </section>
  );
};
