import React from 'react';
import { Dialog } from '@material-ui/core';

// from app
import { FormType } from 'src/constants/enums';
import ServiceForm from 'src/components/pages/services/ServiceForm';
import { IUpdateServiceBody } from 'src/interfaces/api/request/Service';

interface Props {
  isOpen: boolean;
  params: IUpdateServiceBody;
  onChangeWifiName: (value: string) => void;
  onChangeLink: (value: string) => void;
  onSave: () => Promise<void>;
  onCancel: () => void;
}

/** Wi-Fiサービス編集フォームモーダル */
const ServiceEditModal: React.FC<Props> = (props: Props) => {
  const { isOpen, params, onChangeWifiName, onChangeLink, onSave, onCancel } =
    props;

  return (
    <Dialog open={isOpen} onClose={onCancel}>
      <ServiceForm
        formType={FormType.UPDATE}
        params={params}
        onChangeWifiName={onChangeWifiName}
        onChangeLink={onChangeLink}
        onSave={onSave}
      />
    </Dialog>
  );
};

export default ServiceEditModal;
