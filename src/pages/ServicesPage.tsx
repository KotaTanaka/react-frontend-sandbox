import React from 'react';
import styled from 'styled-components';

// from app
import PageHeading from 'components/PageHeading';
import { IService } from 'interfaces/api/Service';
import useGetServices from 'hooks/useGetServices';

/**
 * Wi-Fiサービス一覧ページ
 * @author kotatanaka
 */
const ServicesPage: React.FC = () => {
  const { services, isLoading } = useGetServices();

  return (
    <Container>
      <PageHeading heading="Wi-Fiサービス一覧" />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {services.serviceList.map((service: IService) => (
            <li key={service.serviceId}>{service.wifiName}</li>
          ))}
        </ul>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ServicesPage;
