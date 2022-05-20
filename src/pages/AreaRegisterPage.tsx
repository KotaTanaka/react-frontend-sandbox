import styled from '@emotion/styled';
import AreaRegisterForm from 'src/components/pages/Area/AreaForm';
import PageHeading from 'src/components/partials/PageHeading';
import SuccessPopup from 'src/components/partials/SuccessPopup';
import { PAGES } from 'src/constants/page';
import useRegisterArea from 'src/hooks/useRegisterArea';
import { flexColumnCenter } from 'src/styles/mixin';

/** エリア登録ページ */
const AreaRegisterPage: React.FC = () => {
  const {
    values,
    changeValue,
    requestRegisterArea,
    isShowSuccessPopup,
    closeSuccessPopup,
  } = useRegisterArea();

  return (
    <Container>
      <PageHeading heading={PAGES.AREAS_REGISTER.name} />
      <AreaRegisterForm
        values={values}
        onChangeAreaKey={(value: string) => changeValue('areaKey', value)}
        onChangeAreaName={(value: string) => changeValue('areaName', value)}
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
