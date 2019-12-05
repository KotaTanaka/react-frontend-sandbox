import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

/**
 * 固定ヘッダー
 * @author kotatanaka
 */
const Header: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  /** 画面が移動するたびに行う処理 */
  useEffect(() => {
    const { pathname, search } = location;
    console.log(pathname);
    if (search) {
      console.log(search);
    }
  }, [location]);

  const linkToHome = useCallback(() => {
    history.push('/');
  }, []);

  const linkToServices = useCallback(() => {
    history.push('/services');
  }, []);

  return (
    <AppBar position="static">
      <HeaderBar>
        <BarLeft>
          <Title onClick={linkToHome}>
            <Typography variant="h6">Find Wi-Fi</Typography>
          </Title>
        </BarLeft>
        <LinkButton color="inherit" onClick={linkToServices}>
          Wi-Fiサービス一覧
        </LinkButton>
      </HeaderBar>
    </AppBar>
  );
};

const HeaderBar = styled(Toolbar)`
  flex-grow: 1;
`;
const BarLeft = styled.div`
  flex-grow: 1;
`;
const Title = styled(Typography)`
  cursor: pointer;
`;
const LinkButton = styled(Button)``;

export default Header;
