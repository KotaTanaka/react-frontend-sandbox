import React from 'react';
import styled from '@emotion/styled';

// from app
import { PAGES } from 'src/constants/page';
import useGetShops from 'src/hooks/useGetShops';
import PageHeading from 'src/components/partials/PageHeading';
import ShopList from 'src/components/shops/ShopList';
import { flexColumnCenter } from 'src/styles/mixin';

/** 店舗一覧ページ */
const ShopsPage: React.FC = () => {
  const { isShopsLoading } = useGetShops();

  return (
    <Container>
      <PageHeading heading={PAGES.SHOPS.name} />
      <ShopList loading={isShopsLoading} />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ShopsPage;
