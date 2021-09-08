import React from 'react';
import styled from '@emotion/styled';

// from app
import { PAGES } from 'src/constants/page';
import useRegisterArea from 'src/hooks/useRegisterArea';
import PageHeading from 'src/components/partials/PageHeading';
import SuccessPopup from 'src/components/partials/SuccessPopup';
import AreaRegisterForm from 'src/components/areas/AreaRegisterForm';
import { flexColumnCenter } from 'src/styles/mixin';

/** エリア登録ページ */
const AreaRegisterPage: React.FC = () => {
  const {
    registerAreaParams,
    changeAreaKey,
    changeAreaName,
    requestRegisterArea,
    isShowSuccessPopup,
    closeSuccessPopup,
  } = useRegisterArea();

  return (
    <Container>
      <PageHeading heading={PAGES.AREAS_REGISTER.name} />
      <AreaRegisterForm
        params={registerAreaParams}
        onChangeAreaKey={changeAreaKey}
        onChangeAreaName={changeAreaName}
        onSave={requestRegisterArea}
      />
      <SuccessPopup
        open={isShowSuccessPopup}
        onClose={closeSuccessPopup}
        message="エリアを登録しました。"
      />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default AreaRegisterPage;
