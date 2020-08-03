import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

// from app
import { PAGES } from 'src/constants/page';
import useGetShopDetail from 'src/hooks/useGetShopDetail';
import useUpdateShop from 'src/hooks/useUpdateShop';
import useGetAreaMaster from 'src/hooks/useGetAreaMaster';
import useGetServices from 'src/hooks/useGetServices';
import PageHeading from 'src/components/partials/PageHeading';
import SuccessPopup from 'src/components/partials/SuccessPopup';
import ShopDetail from 'src/components/shops/ShopDetail';
import ShopEditModal from 'src/components/shops/ShopEditModal';
import { flexColumnCenter } from 'src/styles/mixin';

/** 店舗詳細ページ */
const ShopDetailPage: React.FC = () => {
  const { shopId } = useParams();

  const { isShopDetailLoading, fetchShopDetail } = useGetShopDetail(shopId);
  const {
    updateShopParams,
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
    requestUpdateShop,
    isShowSuccessPopup,
    closeSuccessPopup,
  } = useUpdateShop(shopId);

  // 選択プルダウンリスト用
  useGetAreaMaster();
  useGetServices();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const openEditModal = useCallback(() => setIsEditing(true), []);
  const closeEditModal = useCallback(() => setIsEditing(false), []);

  const updateShop = useCallback(async () => {
    await requestUpdateShop();
    await fetchShopDetail();
    closeEditModal();
  }, [requestUpdateShop, fetchShopDetail, closeEditModal]);

  return (
    <Container>
      <PageHeading heading={PAGES.SHOPS_DETAIL.name} />
      <ShopDetail loading={isShopDetailLoading} />
      <Button onClick={openEditModal} color="primary">
        編集する
      </Button>
      <ShopEditModal
        isOpen={isEditing}
        params={updateShopParams}
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
        onSave={updateShop}
        onCancel={closeEditModal}
      />
      <SuccessPopup
        open={isShowSuccessPopup}
        onClose={closeSuccessPopup}
        message="店舗の更新に成功しました。"
      />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
  padding-bottom: 64px;
`;

export default ShopDetailPage;
