import React from 'react';
import styled from 'styled-components';

// from app
import { PAGES } from 'src/constants/page';
import PageHeading from 'src/components/partials/PageHeading';
import ServiceRegisterForm from 'src/components/services/ServiceRegisterForm';
import { flexColumnCenter } from 'src/styles/mixin';

/** Wi-Fiサービス登録ページ */
const ServiceRegisterPage: React.FC = () => {
  return (
    <Container>
      <PageHeading heading={PAGES.SERVICES_REGISTER.name} />
      <ServiceRegisterForm />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ServiceRegisterPage;
