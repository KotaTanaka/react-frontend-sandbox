import React from 'react';
import styled from 'styled-components';

// from app
import { PAGES } from 'src/constants/page';
import PageHeading from 'src/components/partials/PageHeading';
import { flexColumnCenter } from 'src/styles/mixin';

/** 店舗一覧ページ */
const ShopsPage: React.FC = () => {
  return (
    <Container>
      <PageHeading heading={PAGES.SHOPS.name} />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ShopsPage;
