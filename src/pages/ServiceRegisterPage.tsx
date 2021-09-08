import styled from '@emotion/styled';
import ServiceForm from 'src/components/pages/Service/ServiceForm';
import PageHeading from 'src/components/partials/PageHeading';
import SuccessPopup from 'src/components/partials/SuccessPopup';
import { FormType } from 'src/constants/enums';
import { PAGES } from 'src/constants/page';
import useRegisterService from 'src/hooks/useRegisterService';
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
      <ServiceForm
        formType={FormType.REGISTER}
        params={registerServiceParams}
        onChangeWifiName={changeWifiName}
        onChangeLink={changeLink}
        onSave={requestRegisterService}
      />
      <SuccessPopup
        open={isShowSuccessPopup}
        onClose={closeSuccessPopup}
        message="Wi-Fiサービスを登録しました。"
      />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ServiceRegisterPage;
