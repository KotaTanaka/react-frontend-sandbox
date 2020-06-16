import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// from app
import usePageTransition from 'src/hooks/usePageTransition';

/** 固定ヘッダー */
const Header: React.FC = () => {
  const classes = useStyles();
  const { moveToHome, moveToServices } = usePageTransition();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <BarLeft>
          <Title onClick={moveToHome}>
            <Typography variant="h6">Find Wi-Fi</Typography>
          </Title>
        </BarLeft>
        <Button color="inherit" onClick={moveToServices}>
          Wi-Fiサービス一覧
        </Button>
      </Toolbar>
    </AppBar>
  );
};

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      flexGrow: 1,
    },
  }),
);
const BarLeft = styled.div`
  flex-grow: 1;
`;
const Title = styled.div`
  cursor: pointer;
`;

export default Header;
