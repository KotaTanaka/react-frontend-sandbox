import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      flexGrow: 1,
    },
  }),
);

/**
 * 固定ヘッダー
 * @author kotatanaka
 */
const Header: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  /** 画面が移動するたびに行う処理 */
  useEffect(() => {
    const { pathname, search } = location;
    console.log(pathname);
    if (search) {
      console.log(search);
    }
  }, [location]);

  const moveToHome = useCallback(() => {
    history.push('/');
  }, [history]);

  const moveToServices = useCallback(() => {
    history.push('/services');
  }, [history]);

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

const BarLeft = styled.div`
  flex-grow: 1;
`;
const Title = styled.div`
  cursor: pointer;
`;

export default Header;
