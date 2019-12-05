import React from 'react';
import styled from 'styled-components';

// from app
import PageHeading from 'components/PageHeading';

/**
 * 管理画面トップページ
 * @author kotatanaka
 */
const TopPage: React.FC = () => {
  return (
    <Container>
      <PageHeading heading="Find Wi-Fi 管理コンソール" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TopPage;
