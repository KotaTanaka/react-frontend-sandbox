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
import { PAGES } from 'src/constants/page';
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
            <ListItemText primary={PAGES.SERVICES.name} />
          </ListItem>
          <ListItem button onClick={moveToRegisterService}>
            <ListItemText primary={PAGES.SERVICES_REGISTER.name} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={moveToShopList}>
            <ListItemText primary={PAGES.SHOPS.name} />
          </ListItem>
          <ListItem button onClick={moveToRegisterShop}>
            <ListItemText primary={PAGES.SHOPS_REGISTER.name} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={moveToReviewList}>
            <ListItemText primary={PAGES.REVIEWS.name} />
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
