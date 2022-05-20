import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import ServiceDetail from 'src/components/pages/Service/ServiceDetail';
import ServiceEditModal from 'src/components/pages/Service/ServiceEditModal';
import ConfirmDialog from 'src/components/partials/ConfirmDialog';
import PageHeading from 'src/components/partials/PageHeading';
import SuccessPopup from 'src/components/partials/SuccessPopup';
import { PAGES } from 'src/constants/page';
import useDeleteService from 'src/hooks/useDeleteService';
import useGetServiceDetail from 'src/hooks/useGetServiceDetail';
import usePageTransition from 'src/hooks/usePageTransition';
import useUpdateService from 'src/hooks/useUpdateService';
import { flexColumnCenter } from 'src/styles/mixin';

/** Wi-Fiサービス詳細ページ */
const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { moveToServiceList } = usePageTransition();

  // prettier-ignore
  const { isServiceDetailLoading, fetchServiceDetail } = useGetServiceDetail(Number(serviceId));
  const {
    values,
    changeValue,
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
        values={values}
        onChangeWifiName={(value: string) => changeValue('wifiName', value)}
        onChangeLink={(value: string) => changeValue('link', value)}
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
