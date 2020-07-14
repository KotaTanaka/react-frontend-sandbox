import React from 'react';
import styled from 'styled-components';

// from app
import { PAGES } from 'src/constants/page';
import useRegisterService from 'src/hooks/useRegisterService';
import PageHeading from 'src/components/partials/PageHeading';
import SuccessPopup from 'src/components/partials/SuccessPopup';
import ServiceRegisterForm from 'src/components/services/ServiceRegisterForm';
import { flexColumnCenter } from 'src/styles/mixin';

/** Wi-Fiサービス登録ページ */
const ServiceRegisterPage: React.FC = () => {
  const {
    registerServiceParams,
    changeWifiName,
    changeLink,
    requestRegisterService,
    isShowSuccessPopup,
    closeSuccessPopup,
  } = useRegisterService();

  return (
    <Container>
      <PageHeading heading={PAGES.SERVICES_REGISTER.name} />
      <ServiceRegisterForm
        params={registerServiceParams}
        onChangeWifiName={changeWifiName}
        onChangeLink={changeLink}
        onSave={requestRegisterService}
      />
      <SuccessPopup
        open={isShowSuccessPopup}
        onClose={closeSuccessPopup}
        message="Wi-Fiサービスの登録に成功しました。"
      />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ServiceRegisterPage;
