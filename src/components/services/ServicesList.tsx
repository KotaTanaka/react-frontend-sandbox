import React from 'react';
import styled from 'styled-components';

// from app
import { IService, IServiceList } from 'src/interfaces/api/Service';

interface Props {
  services: IServiceList;
  loading: boolean;
}

/** Wi-Fiサービスリスト */
const ServicesList: React.FC<Props> = (props: Props) => {
  const { services, loading } = props;

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <ul>
        {services.serviceList.map((service: IService) => (
          <li key={service.serviceId}>{service.wifiName}</li>
        ))}
      </ul>
    </Container>
  );
};

// styles
const Container = styled.div``;

export default ServicesList;
