import React from 'react';
import styled from 'styled-components';

// from app
import { PAGES } from 'src/constants/page';
import useGetServices from 'src/hooks/useGetServices';
import PageHeading from 'src/components/partials/PageHeading';
import ServiceList from 'src/components/services/ServiceList';
import { flexColumnCenter } from 'src/styles/mixin';

/** Wi-Fiサービス一覧ページ */
const ServicesPage: React.FC = () => {
  const { services, isServicesLoading } = useGetServices();

  return (
    <Container>
      <PageHeading heading={PAGES.SERVICES.name} />
      <ServiceList data={services} loading={isServicesLoading} />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ServicesPage;
