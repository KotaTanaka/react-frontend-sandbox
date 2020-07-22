import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// from app
import { useGlobalState } from 'src/Context';
import { baseContainer } from 'src/styles/mixin';

interface Props {
  loading: boolean;
}

/** 店舗詳細 */
const ShopDetail: React.FC<Props> = (props: Props) => {
  const { loading } = props;
  const classes = useStyles();

  const { shopDetail } = useGlobalState('shop');

  const {
    shopId,
    shopName,
    // area,
    description,
    address,
    access,
    // SSID,
    shopType,
    openingHours,
    seatsNum,
    // hasPower,
    reviewCount,
    average,
    // serviceId,
    wifiName,
    createdAt,
    updatedAt,
    // deletedAt,
    // reviewList,
  } = shopDetail;

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Typography variant="h6" className={classes.shopName}>
        {shopName}
      </Typography>
      <InformationContainer>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.name}>店舗ID</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.value}>{shopId}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.name}>店舗概要</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.value}>{description}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.name}>Wi-Fiサービス名</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.value}>{wifiName}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.name}>店舗住所</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.value}>{address}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.name}>店舗アクセス</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.value}>{access}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.name}>店舗タイプ</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.value}>{shopType}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.name}>営業時間</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.value}>{openingHours}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.name}>座席数</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.value}>{seatsNum}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.name}>レビュー数</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.value}>{reviewCount}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.name}>評価平均</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.value}>{average}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.name}>登録日</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.value}>{createdAt}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.name}>更新日</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridContent}>
            <Typography className={classes.value}>{updatedAt}</Typography>
          </Grid>
        </Grid>
      </InformationContainer>
    </Container>
  );
};

// styles
const useStyles = makeStyles({
  shopName: {
    textAlign: 'center',
    padding: '16px 0',
  },
  gridContainer: {
    width: 480,
  },
  gridContent: {
    padding: '8px 0',
  },
  name: {
    color: '#777',
  },
  value: {},
});
const Container = styled.div``;
const InformationContainer = styled.div`
  ${baseContainer};
`;

export default ShopDetail;
