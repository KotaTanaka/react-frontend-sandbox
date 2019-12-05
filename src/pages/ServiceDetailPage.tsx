import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

// from app
import PageHeading from 'components/PageHeading';

/**
 * Wi-Fiサービス詳細ページ
 * @author kotatanaka
 */
const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams();

  return (
    <Container>
      <PageHeading heading="Wi-Fiサービス詳細" />
      <p>サービスID: {serviceId}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ServiceDetailPage;
