import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { flexColumnCenter } from 'src/styles/mixin';

// from app
import { PAGES } from 'src/constants/page';
import PageHeading from 'src/components/partials/PageHeading';

/** 店舗詳細ページ */
const ShopDetailPage: React.FC = () => {
  const { shopId } = useParams();

  return (
    <Container>
      <PageHeading heading={PAGES.SHOPS_DETAIL.name} />
      <p>店舗ID: {shopId}</p>
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ShopDetailPage;
