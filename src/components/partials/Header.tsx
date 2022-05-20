import styled from '@emotion/styled';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import usePageTransition from 'src/hooks/usePageTransition';

/** 固定ヘッダー */
const Header: React.FC = () => {
  const classes = useStyles();
  const { moveToHome } = usePageTransition();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Title onClick={moveToHome}>
          <Typography variant="h5" className={classes.titleText}>
            Find Wi-Fi
          </Typography>
          <Typography className={classes.titleSubText}>
            Admin Console
          </Typography>
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
      background: `linear-gradient(to bottom, #3f51b5, #6495ed)`,
    },
    titleText: {
      letterSpacing: 2,
      textShadow: '1px 1px 2px #b0e0e6',
    },
    titleSubText: {
      marginLeft: theme.spacing(1.5),
      letterSpacing: 1,
    },
  }),
);
const Title = styled.div`
  cursor: pointer;
  display: flex;
  align-items: baseline;
`;

export default Header;
