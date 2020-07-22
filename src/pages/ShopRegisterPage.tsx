import React from 'react';
import styled from 'styled-components';

// from app
import { PAGES } from 'src/constants/page';
import useRegisterShop from 'src/hooks/useRegisterShop';
import useGetAreaMaster from 'src/hooks/useGetAreaMaster';
import useGetServices from 'src/hooks/useGetServices';
import PageHeading from 'src/components/partials/PageHeading';
import SuccessPopup from 'src/components/partials/SuccessPopup';
import ShopRegisterForm from 'src/components/shops/ShopRegisterForm';
import { flexColumnCenter } from 'src/styles/mixin';

/** 店舗登録ページ */
const ShopRegisterPage: React.FC = () => {
  const {
    registerShopParams,
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
      <ShopRegisterForm
        params={registerShopParams}
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
        message="店舗の登録に成功しました。"
      />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ShopRegisterPage;
