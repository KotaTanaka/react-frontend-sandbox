import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import ShopDetail from 'src/components/pages/Shop/ShopDetail';
import ShopEditModal from 'src/components/pages/Shop/ShopEditModal';
import ConfirmDialog from 'src/components/partials/ConfirmDialog';
import PageHeading from 'src/components/partials/PageHeading';
import SuccessPopup from 'src/components/partials/SuccessPopup';
import { PAGES } from 'src/constants/page';
import useDeleteShop from 'src/hooks/useDeleteShop';
import useGetAreaMaster from 'src/hooks/useGetAreaMaster';
import useGetServices from 'src/hooks/useGetServices';
import useGetShopDetail from 'src/hooks/useGetShopDetail';
import usePageTransition from 'src/hooks/usePageTransition';
import useUpdateShop from 'src/hooks/useUpdateShop';
import { flexColumnCenter } from 'src/styles/mixin';

/** 店舗詳細ページ */
const ShopDetailPage: React.FC = () => {
  const { shopId } = useParams<{ shopId: string }>();
  const { moveToShopList } = usePageTransition();

  const { isShopDetailLoading, fetchShopDetail } = useGetShopDetail(
    Number(shopId),
  );
  const {
    values,
    changeInputValue,
    ssidValue,
    changeSSID,
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

  // prettier-ignore
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
