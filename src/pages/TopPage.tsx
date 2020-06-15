import React from 'react';
import styled from 'styled-components';

// from app
import PageHeading from 'src/components/PageHeading';
import { flexColumnCenter } from 'src/styles/mixin';

/** 管理画面トップページ */
const TopPage: React.FC = () => {
  return (
    <Container>
      <PageHeading heading="Find Wi-Fi 管理コンソール" />
    </Container>
  );
};

const Container = styled.div`
  ${flexColumnCenter};
`;

export default TopPage;
