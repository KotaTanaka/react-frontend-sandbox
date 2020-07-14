import React from 'react';
import styled from 'styled-components';

// from app
import { PAGES } from 'src/constants/page';
import PageHeading from 'src/components/partials/PageHeading';
import { flexColumnCenter } from 'src/styles/mixin';

/** エリア一覧ページ */
const AreasPage: React.FC = () => {
  return (
    <Container>
      <PageHeading heading={PAGES.AREAS.name} />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default AreasPage;
