import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// from app
import { IInformationGridItem } from 'src/interfaces/View';

interface Props {
  items: IInformationGridItem[];
}

/** 情報グリッドレイアウト */
const InformationGrid: React.FC<Props> = (props: Props) => {
  const { items } = props;
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {items.map((item) => {
        return (
          <>
            <Grid item xs={6} className={classes.gridContent}>
              <Typography className={classes.rowTitle}>{item.title}</Typography>
            </Grid>
            <Grid item xs={6} className={classes.gridContent}>
              <Typography className={classes.rowValue}>{item.value}</Typography>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};

// styles
const useStyles = makeStyles({
  gridContainer: {
    width: 480,
  },
  gridContent: {
    padding: '8px 0',
  },
  rowTitle: {
    color: '#777',
  },
  rowValue: {},
});

export default InformationGrid;
