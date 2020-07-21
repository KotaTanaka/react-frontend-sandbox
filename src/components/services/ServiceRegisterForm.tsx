import React from 'react';
import styled from 'styled-components';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Save } from '@material-ui/icons';

// from app
import FormInput from 'src/components/partials/Form/FormInput';
import ButtonPrimary from 'src/components/partials/Button/ButtonPrimary';
import { IRegisterServiceBody } from 'src/interfaces/api/request/Service';

interface Props {
  params: IRegisterServiceBody;
  onChangeWifiName: (value: string) => void;
  onChangeLink: (value: string) => void;
  onSave: () => Promise<void>;
}

/** Wi-Fiサービス登録フォーム */
const ServiceRegisterForm: React.FC<Props> = (props: Props) => {
  const { params, onChangeWifiName, onChangeLink, onSave } = props;
  const classes = useStyles();

  return (
    <Container>
      <FormControl className={classes.form}>
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
      </FormControl>
    </Container>
  );
};

// styles
const useStyles = makeStyles({
  form: {
    alignItems: 'center',
  },
});
const Container = styled.div``;

export default ServiceRegisterForm;
