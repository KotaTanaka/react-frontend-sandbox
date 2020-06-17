import React from 'react';
import styled from 'styled-components';

// from app
import { PAGES } from 'src/constants/page';
import PageHeading from 'src/components/partials/PageHeading';
import ShopRegisterForm from 'src/components/shops/ShopRegisterForm';
import { flexColumnCenter } from 'src/styles/mixin';

/** 店舗登録ページ */
const ShopRegisterPage: React.FC = () => {
  return (
    <Container>
      <PageHeading heading={PAGES.SHOPS_REGISTER.name} />
      <ShopRegisterForm />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ShopRegisterPage;
