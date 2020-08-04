import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// from app
import { useGlobalState } from 'src/Context';
import InformationGrid from 'src/components/partials/InformationGrid';
import { IInformationGridItem } from 'src/interfaces/View';
import { baseContainer } from 'src/styles/mixin';

interface Props {
  loading: boolean;
}

/** 店舗詳細 */
const ShopDetail: React.FC<Props> = (props: Props) => {
  const { loading } = props;
  const classes = useStyles();

  const { shopDetail } = useGlobalState('shop');

  /** 詳細データ */
  const informationGridItems = useMemo((): IInformationGridItem[] => {
    const {
      shopId,
      description,
      address,
      access,
      shopType,
      openingHours,
      seatsNum,
      reviewCount,
      average,
      wifiName,
      createdAt,
      updatedAt,
    } = shopDetail;

    return [
      { title: '店舗ID', value: shopId },
      { title: '店舗概要', value: description },
      { title: 'Wi-Fiサービス名', value: wifiName },
      { title: '店舗住所', value: address },
      { title: '店舗アクセス', value: access },
      { title: '店舗タイプ', value: shopType },
      { title: '営業時間', value: openingHours },
      { title: '座席数', value: seatsNum },
      { title: 'レビュー数', value: reviewCount },
      { title: '評価平均', value: average },
      { title: '登録日時', value: createdAt },
      { title: '更新日時', value: updatedAt },
    ];
  }, [shopDetail]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Typography variant="h6" className={classes.shopName}>
        {shopDetail.shopName}
      </Typography>
      <InformationContainer>
        <InformationGrid items={informationGridItems} />
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
});
const Container = styled.div``;
const InformationContainer = styled.div`
  ${baseContainer};
`;

export default ShopDetail;
