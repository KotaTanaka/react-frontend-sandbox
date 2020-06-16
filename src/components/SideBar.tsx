import React from 'react';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

// from app
import usePageTransition from 'src/hooks/usePageTransition';

/** サイドバー */
const SideBar: React.FC = () => {
  const classes = useStyles();

  const {
    moveToServiceList,
    moveToRegisterService,
    moveToShopList,
    moveToRegisterShop,
    moveToReviewList,
  } = usePageTransition();

  return (
    <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
      <Toolbar />
      <div>
        <List>
          <ListItem button onClick={moveToServiceList}>
            <ListItemText primary="Wi-Fiサービス一覧" />
          </ListItem>
          <ListItem button onClick={moveToRegisterService}>
            <ListItemText primary="Wi-Fiサービス新規登録" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={moveToShopList}>
            <ListItemText primary="店舗一覧" />
          </ListItem>
          <ListItem button onClick={moveToRegisterShop}>
            <ListItemText primary="店舗新規登録" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={moveToReviewList}>
            <ListItemText primary="レビュー一覧" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

// styles
const useStyles = makeStyles((theme: Theme) => ({
  drawerPaper: {
    width: 240,
  },
}));

export default SideBar;
