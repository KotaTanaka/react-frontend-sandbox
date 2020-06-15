import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { flexColumnCenter } from 'src/styles/mixin';

// from app
import PageHeading from 'src/components/PageHeading';

/** Wi-Fiサービス詳細ページ */
const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams();

  return (
    <Container>
      <PageHeading heading="Wi-Fiサービス詳細" />
      <p>サービスID: {serviceId}</p>
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ServiceDetailPage;
