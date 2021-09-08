import styled from '@emotion/styled';
import ServiceList from 'src/components/pages/Service/ServiceList';
import PageHeading from 'src/components/partials/PageHeading';
import { PAGES } from 'src/constants/page';
import useGetServices from 'src/hooks/useGetServices';
import { flexColumnCenter } from 'src/styles/mixin';

/** Wi-Fiサービス一覧ページ */
const ServicesPage: React.FC = () => {
  const { isServicesLoading } = useGetServices();

  return (
    <Container>
      <PageHeading heading={PAGES.SERVICES.name} />
      <ServiceList loading={isServicesLoading} />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ServicesPage;
