import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import styled from '@emotion/styled';

// from app
import { PAGES } from 'src/constants/page';
import usePageTransition from 'src/hooks/usePageTransition';
import useGetServiceDetail from 'src/hooks/useGetServiceDetail';
import useUpdateService from 'src/hooks/useUpdateService';
import useDeleteService from 'src/hooks/useDeleteService';
import PageHeading from 'src/components/partials/PageHeading';
import SuccessPopup from 'src/components/partials/SuccessPopup';
import ConfirmDialog from 'src/components/partials/ConfirmDialog';
import ServiceDetail from 'src/components/services/ServiceDetail';
import ServiceEditModal from 'src/components/services/ServiceEditModal';
import { flexColumnCenter } from 'src/styles/mixin';

/** Wi-Fiサービス詳細ページ */
const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { moveToServiceList } = usePageTransition();

  // prettier-ignore
  const { isServiceDetailLoading, fetchServiceDetail } = useGetServiceDetail(Number(serviceId));
  const {
    updateServiceParams,
    changeWifiName,
    changeLink,
    requestUpdateService,
    isShowSuccessPopup,
    closeSuccessPopup,
  } = useUpdateService();
  const { requestDeleteService } = useDeleteService();

  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);

  const openEditModal = useCallback(() => setIsEditModalOpen(true), []);
  const closeEditModal = useCallback(() => setIsEditModalOpen(false), []);
  const openDeleteDialog = useCallback(() => setIsDeleteDialogOpen(true), []);
  const closeDeleteDialog = useCallback(() => setIsDeleteDialogOpen(false), []);

  /** Wi-Fiサービス更新 */
  const updateService = useCallback(async () => {
    await requestUpdateService(Number(serviceId));
    await fetchServiceDetail();
    closeEditModal();
  }, [serviceId, requestUpdateService, fetchServiceDetail, closeEditModal]);

  /** Wi-Fiサービス削除 */
  const deleteService = useCallback(async () => {
    await requestDeleteService(Number(serviceId));
    closeDeleteDialog();
    moveToServiceList();
  }, [serviceId, requestDeleteService, closeDeleteDialog, moveToServiceList]);

  return (
    <Container>
      <PageHeading heading={PAGES.SERVICES_DETAIL.name} />
      <ServiceDetail
        loading={isServiceDetailLoading}
        onClickEdit={openEditModal}
        onClickDelete={openDeleteDialog}
      />
      <ServiceEditModal
        isOpen={isEditModalOpen}
        params={updateServiceParams}
        onChangeWifiName={changeWifiName}
        onChangeLink={changeLink}
        onSave={updateService}
        onCancel={closeEditModal}
      />
      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        message="削除しますか？"
        onSubmit={deleteService}
        onCancel={closeDeleteDialog}
      />
      <SuccessPopup
        open={isShowSuccessPopup}
        onClose={closeSuccessPopup}
        message="Wi-Fiサービスを更新しました。"
      />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ServiceDetailPage;
