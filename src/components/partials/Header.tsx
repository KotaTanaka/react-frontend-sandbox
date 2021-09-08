import styled from '@emotion/styled';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// from app
import usePageTransition from 'src/hooks/usePageTransition';

/** 固定ヘッダー */
const Header: React.FC = () => {
  const classes = useStyles();
  const { moveToHome } = usePageTransition();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Title onClick={moveToHome}>
          <Typography variant="h6">Find Wi-Fi</Typography>
        </Title>
      </Toolbar>
    </AppBar>
  );
};

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  }),
);
const Title = styled.div`
  cursor: pointer;
`;

export default Header;
