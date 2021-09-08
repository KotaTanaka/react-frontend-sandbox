import styled from '@emotion/styled';

// from app
import PageHeading from 'src/components/partials/PageHeading';
import { flexColumnCenter } from 'src/styles/mixin';

/** 管理画面トップページ */
const TopPage: React.FC = () => {
  return (
    <Container>
      <PageHeading heading="Find Wi-Fi 管理コンソール" />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default TopPage;
