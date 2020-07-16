import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { flexColumnCenter } from 'src/styles/mixin';

// from app
import { PAGES } from 'src/constants/page';
import useGetShopDetail from 'src/hooks/useGetShopDetail';
import PageHeading from 'src/components/partials/PageHeading';
import ShopDetail from 'src/components/shops/ShopDetail';

/** 店舗詳細ページ */
const ShopDetailPage: React.FC = () => {
  const { shopId } = useParams();
  const { isShopDetailLoading } = useGetShopDetail(shopId);

  return (
    <Container>
      <PageHeading heading={PAGES.SHOPS_DETAIL.name} />
      <p>店舗ID: {shopId}</p>
      <ShopDetail loading={isShopDetailLoading} />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ShopDetailPage;
