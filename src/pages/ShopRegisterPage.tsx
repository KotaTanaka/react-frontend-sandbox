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
    registerShopParams,
    ssidValue,
    changeServiceId,
    changeShopName,
    changeArea,
    changeDescription,
    changeAddress,
    changeAccess,
    changeSSID,
    changeShopType,
    changeOpeningHours,
    changeSeatsNum,
    changeHasPower,
    requestRegisterShop,
    isShowSuccessPopup,
    closeSuccessPopup,
  } = useRegisterShop();

  // 選択プルダウンリスト用
  useGetAreaMaster();
  useGetServices();

  return (
    <Container>
      <PageHeading heading={PAGES.SHOPS_REGISTER.name} />
      <ShopForm
        formType={FormType.REGISTER}
        params={registerShopParams}
        ssid={ssidValue}
        onChangeServiceId={changeServiceId}
        onChangeShopName={changeShopName}
        onChangeArea={changeArea}
        onChangeDescription={changeDescription}
        onChangeAddress={changeAddress}
        onChangeAccess={changeAccess}
        onChangeSSID={changeSSID}
        onChangeShopType={changeShopType}
        onChangeOpeningHours={changeOpeningHours}
        onChangeSeatsNum={changeSeatsNum}
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
