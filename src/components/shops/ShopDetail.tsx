import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// from app
import { useGlobalState } from 'src/Context';
import { IconButtonType } from 'src/constants/enums';
import InformationGrid from 'src/components/partials/InformationGrid';
import EditButton from 'src/components/partials/Button/EditButton';
import DeleteButton from 'src/components/partials/Button/DeleteButton';
import { IInformationGridItem } from 'src/interfaces/View';
import { baseContainer, flexColumnCenter } from 'src/styles/mixin';

interface Props {
  loading: boolean;
  onClickEdit: () => void;
  onClickDelete: () => void;
}

/** 店舗詳細 */
const ShopDetail: React.FC<Props> = (props: Props) => {
  const { loading, onClickEdit, onClickDelete } = props;
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
      <Buttons>
        <EditButton type={IconButtonType.BADGE} onClick={onClickEdit} />
        <DeleteButton type={IconButtonType.BADGE} onClick={onClickDelete} />
      </Buttons>
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
const Container = styled.div`
  ${flexColumnCenter};
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 96px;
  margin-top: 24px;
`;
const InformationContainer = styled.div`
  ${baseContainer};
`;

export default ShopDetail;
