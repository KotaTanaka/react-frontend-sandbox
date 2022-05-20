import styled from '@emotion/styled';
import ShopForm from 'src/components/pages/Shop/ShopForm';
import PageHeading from 'src/components/partials/PageHeading';
import SuccessPopup from 'src/components/partials/SuccessPopup';
import { FormType } from 'src/constants/enums';
import { PAGES } from 'src/constants/page';
import useGetAreaMaster from 'src/hooks/useGetAreaMaster';
import useGetServices from 'src/hooks/useGetServices';
import useRegisterShop from 'src/hooks/useRegisterShop';
import { flexColumnCenter } from 'src/styles/mixin';

/** 店舗登録ページ */
const ShopRegisterPage: React.FC = () => {
  const {
    values,
    ssidValue,
    changeInputValue,
    changeSSID,
    changeHasPower,
    requestRegisterShop,
    isShowSuccessPopup,
    closeSuccessPopup,
  } = useRegisterShop();

  // 選択プルダウンリスト用
  useGetAreaMaster();
  useGetServices();

  // prettier-ignore
  return (
    <Container>
      <PageHeading heading={PAGES.SHOPS_REGISTER.name} />
      <ShopForm
        formType={FormType.REGISTER}
        values={values}
        ssid={ssidValue}
        onChangeServiceId={(value: number) => changeInputValue('serviceId', value)}
        onChangeShopName={(value: string) => changeInputValue('shopName', value)}
        onChangeArea={(value: string) => changeInputValue('area', value)}
        onChangeDescription={(value: string) => changeInputValue('description', value)}
        onChangeAddress={(value: string) => changeInputValue('address', value)}
        onChangeAccess={(value: string) => changeInputValue('access', value)}
        onChangeSSID={changeSSID}
        onChangeShopType={(value: string) => changeInputValue('shopType', value)}
        onChangeOpeningHours={(value: string) => changeInputValue('openingHours', value)}
        onChangeSeatsNum={(value: number) => changeInputValue('seatsNum', value)}
        onChangeHasPower={changeHasPower}
        onSave={requestRegisterShop}
      />
      <SuccessPopup
        open={isShowSuccessPopup}
        onClose={closeSuccessPopup}
        message="店舗を登録しました。"
      />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
  padding-bottom: 64px;
`;

export default ShopRegisterPage;
