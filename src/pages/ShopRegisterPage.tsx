import React from 'react';
import styled from 'styled-components';

// from app
import { PAGES } from 'src/constants/page';
import useRegisterShop from 'src/hooks/useRegisterShop';
import PageHeading from 'src/components/partials/PageHeading';
import ShopRegisterForm from 'src/components/shops/ShopRegisterForm';
import { flexColumnCenter } from 'src/styles/mixin';

/** 店舗登録ページ */
const ShopRegisterPage: React.FC = () => {
  const {
    registerShopParams,
    changeServiceId,
    changeArea,
    changeSSID,
    changeShopName,
    changeDescription,
    changeAddress,
    changeShopType,
    changeOpeningHours,
    changeSeatsNum,
    changeHasPower,
    requestRegisterShop,
  } = useRegisterShop();

  return (
    <Container>
      <PageHeading heading={PAGES.SHOPS_REGISTER.name} />
      <ShopRegisterForm
        params={registerShopParams}
        onChangeServiceId={changeServiceId}
        onChangeArea={changeArea}
        onChangeSSID={changeSSID}
        onChangeShopName={changeShopName}
        onChangeDescription={changeDescription}
        onChangeAddress={changeAddress}
        onChangeShopType={changeShopType}
        onChangeOpeningHours={changeOpeningHours}
        onChangeSeatsNum={changeSeatsNum}
        onChangeHasPower={changeHasPower}
        onSave={requestRegisterShop}
      />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ShopRegisterPage;
