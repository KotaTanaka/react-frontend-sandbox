import { Dialog } from '@material-ui/core';
import ServiceForm from 'src/components/pages/Service/ServiceForm';
import { FormType } from 'src/constants/enums';
import type { IUpdateServiceBody } from 'src/interfaces/api/request/Service';

interface Props {
  isOpen: boolean;
  values: IUpdateServiceBody;
  onChangeWifiName: (value: string) => void;
  onChangeLink: (value: string) => void;
  onSave: () => Promise<void>;
  onCancel: () => void;
}

/** Wi-Fiサービス編集フォームモーダル */
const ServiceEditModal: React.FC<Props> = (props: Props) => {
  const { isOpen, values, onChangeWifiName, onChangeLink, onSave, onCancel } =
    props;

  return (
    <Dialog open={isOpen} onClose={onCancel}>
      <ServiceForm
        formType={FormType.UPDATE}
        values={values}
        onChangeWifiName={onChangeWifiName}
        onChangeLink={onChangeLink}
        onSave={onSave}
      />
    </Dialog>
  );
};

export default ServiceEditModal;
