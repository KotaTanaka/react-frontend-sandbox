import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { flexColumnCenter } from 'src/styles/mixin';

// from app
import { PAGES } from 'src/constants/page';
import useGetServiceDetail from 'src/hooks/useGetServiceDetail';
import PageHeading from 'src/components/partials/PageHeading';
import ServiceDetail from 'src/components/services/ServiceDetail';

/** Wi-Fiサービス詳細ページ */
const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams();
  const { isServiceDetailLoading } = useGetServiceDetail(serviceId);

  return (
    <Container>
      <PageHeading heading={PAGES.SERVICES_DETAIL.name} />
      <ServiceDetail loading={isServiceDetailLoading} />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ServiceDetailPage;
