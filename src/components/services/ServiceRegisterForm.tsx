import React from 'react';
import styled from 'styled-components';
import { Button, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Save } from '@material-ui/icons';

// from app
import FormInput from 'src/components/partials/FormInput';
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
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<Save />}
          className={classes.button}
          onClick={onSave}
        >
          登録する
        </Button>
      </FormControl>
    </Container>
  );
};

// styles
const useStyles = makeStyles({
  form: {
    alignItems: 'center',
  },
  button: {
    width: 240,
    marginTop: 64,
  },
});
const Container = styled.div``;

export default ServiceRegisterForm;
