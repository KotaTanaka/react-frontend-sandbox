import styled from '@emotion/styled';
import PageHeading from 'src/components/partials/PageHeading';
import { flexColumnCenter } from 'src/styles/mixin';

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <PageHeading heading="Not Found" />
    </Container>
  );
};

const Container = styled.div`
  ${flexColumnCenter};
`;

export default NotFoundPage;
