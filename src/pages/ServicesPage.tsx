import React from 'react';
import styled from 'styled-components';

// from app
import PageHeading from 'src/components/PageHeading';
import { IService } from 'src/interfaces/api/Service';
import useGetServices from 'src/hooks/useGetServices';
import { flexColumnCenter } from 'src/styles/mixin';

/** Wi-Fiサービス一覧ページ */
const ServicesPage: React.FC = () => {
  const { services, isServicesLoading } = useGetServices();

  if (isServicesLoading) {
    return (
      <Container>
        <PageHeading heading="Wi-Fiサービス一覧" />
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container>
      <PageHeading heading="Wi-Fiサービス一覧" />
      <ul>
        {services.serviceList.map((service: IService) => (
          <li key={service.serviceId}>{service.wifiName}</li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  ${flexColumnCenter};
`;

export default ServicesPage;
