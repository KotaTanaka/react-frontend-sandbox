import React from 'react';
import styled from 'styled-components';
import { Save } from '@material-ui/icons';

// from app
import FormInput from 'src/components/partials/Form/FormInput';
import ButtonPrimary from 'src/components/partials/Button/ButtonPrimary';
import { IRegisterServiceBody } from 'src/interfaces/api/request/Service';
import { flexColumnCenter } from 'src/styles/mixin';

interface Props {
  params: IRegisterServiceBody;
  onChangeWifiName: (value: string) => void;
  onChangeLink: (value: string) => void;
  onSave: () => Promise<void>;
}

/** Wi-Fiサービス登録フォーム */
const ServiceRegisterForm: React.FC<Props> = (props: Props) => {
  const { params, onChangeWifiName, onChangeLink, onSave } = props;

  return (
    <Container>
      <FormInput
        label="サービス名"
        help="Wi-Fiのサービス名称を入力"
        value={params.wifiName}
        onChange={onChangeWifiName}
      />
      <FormInput
        label="リンク"
        help="公式サイトのURL等を入力"
        value={params.link}
        onChange={onChangeLink}
      />
      <ButtonPrimary label="登録する" icon={<Save />} onClick={onSave} />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
`;

export default ServiceRegisterForm;
