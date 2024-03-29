import styled from '@emotion/styled';
import { Save } from '@material-ui/icons';
import { useMemo } from 'react';
import ButtonPrimary from 'src/components/partials/Button/ButtonPrimary';
import FormInput from 'src/components/partials/Form/FormInput';
import { FormType } from 'src/constants/enums';
import type {
  IRegisterServiceBody,
  IUpdateServiceBody,
} from 'src/interfaces/api/request/Service';
import { baseContainer, flexColumnCenter } from 'src/styles/mixin';

interface Props {
  formType: FormType;
  values: IRegisterServiceBody | IUpdateServiceBody;
  onChangeWifiName: (value: string) => void;
  onChangeLink: (value: string) => void;
  onSave: () => Promise<void>;
}

/** Wi-Fiサービス登録フォーム */
const ServiceForm: React.FC<Props> = (props: Props) => {
  const { formType, values, onChangeWifiName, onChangeLink, onSave } = props;

  const buttonLabel = useMemo(() => {
    switch (formType) {
      case FormType.REGISTER:
        return '登録する';
      case FormType.UPDATE:
        return '更新する';
      default:
        return '送信する';
    }
  }, [formType]);

  return (
    <Container>
      <FormInput
        label="サービス名"
        help="Wi-Fiのサービス名称を入力"
        value={values.wifiName || ''}
        onChange={onChangeWifiName}
      />
      <FormInput
        label="リンク"
        help="公式サイトのURL等を入力"
        value={values.link || ''}
        onChange={onChangeLink}
      />
      <ButtonPrimary label={buttonLabel} icon={<Save />} onClick={onSave} />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
  ${baseContainer};
`;

export default ServiceForm;
