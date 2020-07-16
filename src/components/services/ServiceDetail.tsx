import React from 'react';
import styled from 'styled-components';

// from app
import { useGlobalState } from 'src/Context';

interface Props {
  loading: boolean;
}

/** Wi-Fiサービス詳細 */
const ServiceDetail: React.FC<Props> = (props: Props) => {
  const { loading } = props;
  const { serviceDetail } = useGlobalState('service');

  if (loading) {
    return <p>Loading...</p>;
  }

  // TODO 色付け
  console.log(serviceDetail);
  return <Container />;
};

// styles
const Container = styled.div``;

export default ServiceDetail;
