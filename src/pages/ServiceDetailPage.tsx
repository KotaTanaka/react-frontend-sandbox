import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { flexColumnCenter } from 'src/styles/mixin';

// from app
import { PAGES } from 'src/constants/page';
import PageHeading from 'src/components/partials/PageHeading';

/** Wi-Fiサービス詳細ページ */
const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams();

  return (
    <Container>
      <PageHeading heading={PAGES.SERVICES_DETAIL.name} />
      <p>サービスID: {serviceId}</p>
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ServiceDetailPage;
