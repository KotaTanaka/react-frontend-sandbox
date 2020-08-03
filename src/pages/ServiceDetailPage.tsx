import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

// from app
import { PAGES } from 'src/constants/page';
import useGetServiceDetail from 'src/hooks/useGetServiceDetail';
import useUpdateService from 'src/hooks/useUpdateService';
import PageHeading from 'src/components/partials/PageHeading';
import SuccessPopup from 'src/components/partials/SuccessPopup';
import ServiceDetail from 'src/components/services/ServiceDetail';
import ServiceEditModal from 'src/components/services/ServiceEditModal';
import { flexColumnCenter } from 'src/styles/mixin';

/** Wi-Fiサービス詳細ページ */
const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams();

  // prettier-ignore
  const { isServiceDetailLoading, fetchServiceDetail } = useGetServiceDetail(serviceId);
  const {
    updateServiceParams,
    changeWifiName,
    changeLink,
    requestUpdateService,
    isShowSuccessPopup,
    closeSuccessPopup,
  } = useUpdateService(serviceId);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const openEditModal = useCallback(() => setIsEditing(true), []);
  const closeEditModal = useCallback(() => setIsEditing(false), []);

  const updateService = useCallback(async () => {
    await requestUpdateService();
    await fetchServiceDetail();
    closeEditModal();
  }, [requestUpdateService, fetchServiceDetail, closeEditModal]);

  return (
    <Container>
      <PageHeading heading={PAGES.SERVICES_DETAIL.name} />
      <ServiceDetail loading={isServiceDetailLoading} />
      <Button onClick={openEditModal} color="primary">
        編集する
      </Button>
      <ServiceEditModal
        isOpen={isEditing}
        params={updateServiceParams}
        onChangeWifiName={changeWifiName}
        onChangeLink={changeLink}
        onSave={updateService}
        onCancel={closeEditModal}
      />
      <SuccessPopup
        open={isShowSuccessPopup}
        onClose={closeSuccessPopup}
        message="Wi-Fiサービスの更新に成功しました。"
      />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ServiceDetailPage;
