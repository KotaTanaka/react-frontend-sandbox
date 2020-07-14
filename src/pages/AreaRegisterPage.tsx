import React from 'react';
import styled from 'styled-components';

// from app
import { PAGES } from 'src/constants/page';
import PageHeading from 'src/components/partials/PageHeading';
import { flexColumnCenter } from 'src/styles/mixin';

/** エリア登録ページ */
const AreaRegisterPage: React.FC = () => {
  return (
    <Container>
      <PageHeading heading={PAGES.AREAS_REGISTER.name} />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default AreaRegisterPage;
