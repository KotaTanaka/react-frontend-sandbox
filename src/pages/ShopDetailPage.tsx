import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

// from app
import { PAGES } from 'src/constants/page';
import usePageTransition from 'src/hooks/usePageTransition';
import useGetShopDetail from 'src/hooks/useGetShopDetail';
import useUpdateShop from 'src/hooks/useUpdateShop';
import useDeleteShop from 'src/hooks/useDeleteShop';
import useGetAreaMaster from 'src/hooks/useGetAreaMaster';
import useGetServices from 'src/hooks/useGetServices';
import PageHeading from 'src/components/partials/PageHeading';
import SuccessPopup from 'src/components/partials/SuccessPopup';
import ConfirmDialog from 'src/components/partials/ConfirmDialog';
import ShopDetail from 'src/components/shops/ShopDetail';
import ShopEditModal from 'src/components/shops/ShopEditModal';
import { flexColumnCenter } from 'src/styles/mixin';

/** 店舗詳細ページ */
const ShopDetailPage: React.FC = () => {
  const { shopId } = useParams<{ shopId: string }>();
  const { moveToShopList } = usePageTransition();

  const { isShopDetailLoading, fetchShopDetail } = useGetShopDetail(
    Number(shopId),
  );
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
  } = useUpdateShop();
  const { requestDeleteShop } = useDeleteShop();

  // 選択プルダウンリスト用
  useGetAreaMaster();
  useGetServices();

  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);

  const openEditModal = useCallback(() => setIsEditModalOpen(true), []);
  const closeEditModal = useCallback(() => setIsEditModalOpen(false), []);
  const openDeleteDialog = useCallback(() => setIsDeleteDialogOpen(true), []);
  const closeDeleteDialog = useCallback(() => setIsDeleteDialogOpen(false), []);

  /** 店舗情報更新 */
  const updateShop = useCallback(async () => {
    await requestUpdateShop(Number(shopId));
    await fetchShopDetail();
    closeEditModal();
  }, [shopId, requestUpdateShop, fetchShopDetail, closeEditModal]);

  /** 店舗削除 */
  const deleteShop = useCallback(async () => {
    await requestDeleteShop(Number(shopId));
    closeDeleteDialog();
    moveToShopList();
  }, [shopId, requestDeleteShop, closeDeleteDialog, moveToShopList]);

  return (
    <Container>
      <PageHeading heading={PAGES.SHOPS_DETAIL.name} />
      <ShopDetail
        loading={isShopDetailLoading}
        onClickEdit={openEditModal}
        onClickDelete={openDeleteDialog}
      />
      <ShopEditModal
        isOpen={isEditModalOpen}
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
      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        message="削除しますか？"
        onSubmit={deleteShop}
        onCancel={closeDeleteDialog}
      />
      <SuccessPopup
        open={isShowSuccessPopup}
        onClose={closeSuccessPopup}
        message="店舗情報を更新しました。"
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
